import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Patient } from '../utils/patient.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute,private dataService:DataService) { }
  patient:Patient;
  ngOnInit(): void {
    this.dataService.getPatient(this.route.snapshot.params.id).subscribe((res)=>this.patient=res);
  }

}
