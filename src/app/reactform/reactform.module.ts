import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactformRoutingModule } from './reactform-routing.module';
import { ReactformComponent } from './reactform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReactformComponent],
  imports: [
    CommonModule,
    ReactformRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactformModule { }
