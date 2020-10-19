import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffectComponent } from './affect.component';

const routes: Routes = [{ path: '', component: AffectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffectRoutingModule { }
