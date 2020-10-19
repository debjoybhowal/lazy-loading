import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: 'recover', loadChildren: () => import('./recover/recover.module').then(m => m.RecoverModule) },
  
  { path: 'reactform', loadChildren: () => import('./reactform/reactform.module').then(m => m.ReactformModule) },
  { path: 'affect', loadChildren: () => import('./affect/affect.module').then(m => m.AffectModule) },  
  { path: 'user/:id', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },    
  { path: 'user', 
  redirectTo: '/affect',
  pathMatch: 'full', },
  {
    path: '',
    redirectTo: '/affect',
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
