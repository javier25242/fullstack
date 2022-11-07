import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    PlanComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
