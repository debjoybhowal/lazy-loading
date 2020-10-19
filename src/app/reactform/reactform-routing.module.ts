import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactformComponent } from './reactform.component';

const routes: Routes = [{ path: '', component: ReactformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactformRoutingModule { }
