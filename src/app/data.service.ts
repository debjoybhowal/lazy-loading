import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Patient } from './utils/patient.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private data = new ReplaySubject<Patient[]>();
  private globalData: Patient[];

  fetchData(): void {
    this.http
      .get('https://debjoyplace.000webhostapp.com/patients.php')
      .subscribe((patientData: Patient[]) => {
        this.data.next(patientData);
        this.globalData = patientData;
      });
  }
  getData(): ReplaySubject<Patient[]> {
    if (!this.globalData) this.fetchData();
    return this.data;
  }
  setData(data: Patient[]): void {
    data.forEach((item: Patient) => {
      this.globalData = this.globalData.map((patient: Patient) => {
        return item.id == patient.id ? item : patient;
      });
    });

    this.data.next(this.globalData);
    this.updateData();
  }
  removeData(data: Patient[]): void {
    data.forEach((item: Patient) => {
      this.globalData = this.globalData.filter((patient: Patient) => {
        return item.id !== patient.id;
      });
    });

    this.data.next(this.globalData);
    this.updateData();
  }
  addData(data: Patient): void {
    this.globalData = [...this.globalData, data];
    this.data.next(this.globalData);
    this.updateData();
  }
  updateData(): void {
    this.http
      .post('https://debjoyplace.000webhostapp.com/updatePatient.php',JSON.stringify(this.globalData))
      .subscribe((patientData) => {
        console.log(patientData)
      }, (err)=>console.log(err));
  }
  getPatient(id:number):Observable<Patient>{
    return this.http.get<Patient>("https://debjoyplace.000webhostapp.com/patients.php?id="+id);
  }
}
