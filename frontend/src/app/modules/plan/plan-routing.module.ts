import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './plan.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: PlanComponent,
    pathMatch: 'full'
  },

  {
    path: 'add',
    component: AddComponent,
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'plan'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
