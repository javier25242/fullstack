import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddComponent } from './modules/plan/add/add.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },

  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'plan',
    loadChildren: () => import('./modules/plan/plan.module').then(m => m.PlanModule),
  },

  {
    path: 'add',
    component: AddComponent
  },

  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
