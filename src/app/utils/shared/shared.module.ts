import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from '../table-view/table-view.component';
import { ModalComponent } from '../modal/modal.component';
import { TheadComponent } from '../thead/thead.component';
import { FormsModule } from '@angular/forms';
import { FilterNamePipe } from '../pipes/filter-name.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TheadComponent,TableViewComponent,ModalComponent,FilterNamePipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [TheadComponent,TableViewComponent,ModalComponent,FilterNamePipe]
})
export class SharedModule { }
