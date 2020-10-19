import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffectRoutingModule } from './affect-routing.module';
import { AffectComponent } from './affect.component';
import { AffectFormComponent } from './affect-form/affect-form.component';
import { SharedModule } from '../utils/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AffectComponent, AffectFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AffectRoutingModule,
    SharedModule,
  ]
})
export class AffectModule { }
