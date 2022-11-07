import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './plan.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

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
    path: 'edit',
    component: EditComponent,
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
