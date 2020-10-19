import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverRoutingModule } from './recover-routing.module';
import { RecoverComponent } from './recover.component';
import { SharedModule } from '../utils/shared/shared.module';
import { RecoverFormComponent } from './recover-form/recover-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecoverComponent, RecoverFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecoverRoutingModule,
    SharedModule
  ]
})
export class RecoverModule { }
