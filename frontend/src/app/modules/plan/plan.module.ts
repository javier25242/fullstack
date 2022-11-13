import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlanComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    FormsModule
  ]
})
export class PlanModule { }
