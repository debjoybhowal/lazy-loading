import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from '../table-view/table-view.component';
import { ModalComponent } from '../modal/modal.component';
import { TheadComponent } from '../thead/thead.component';
import { FormsModule } from '@angular/forms';
import { FilterNamePipe } from '../pipes/filter-name.pipe';



@NgModule({
  declarations: [TheadComponent,TableViewComponent,ModalComponent,FilterNamePipe],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [TheadComponent,TableViewComponent,ModalComponent,FilterNamePipe]
})
export class SharedModule { }
