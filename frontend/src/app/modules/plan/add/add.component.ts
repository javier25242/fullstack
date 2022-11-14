import { Component, OnInit, HostBinding } from '@angular/core';
import { PlanInterface } from '../../../interfaces/plan/plan-interface';
import { PlanService } from 'src/app/services/plan/plan.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  plan: PlanInterface = {
    IDPlan: 0,
    Nombre: '',
    Precio: 0,
    Descripcion: '',
  };

  edit: boolean = false;

  constructor(private planService:PlanService) { }

  ngOnInit(): void {
  }

  saveNewPlan(){
    delete this.plan.IDPlan;
    this.planService.guardarPlan(this.plan).subscribe(
      res => {
      console.log(res);
      },
      err => console.error(err)
   )
  }

}
