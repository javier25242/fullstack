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
    IDPlan: 0,
    Nombre: '',
    Precio: 0,
    Descripcion: '',
  };

  constructor(private planService:PlanService) { }

  ngOnInit(): void {
  }

  updatePlan(){
    this.planService.updatePlan(this.plan.IDPlan, this.plan).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }
}
