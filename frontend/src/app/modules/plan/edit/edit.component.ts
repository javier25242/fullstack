import { Component, OnInit, HostBinding } from '@angular/core';
import { PlanInterface } from '../../../interfaces/plan/plan-interface';
import { PlanService } from 'src/app/services/plan/plan.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  plan: PlanInterface = {
    IDPlan: 40,
    Nombre: '',
    Precio: 0,
    Descripcion: '',
  };

  constructor(private planService:PlanService) { }

  ngOnInit(): void {
  }

  updatePlan(IDPlan:number|undefined){
    console.log(IDPlan);
    this.planService.updatePlan(IDPlan, this.plan).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }
}
