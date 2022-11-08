import { Component, OnInit, HostBinding } from '@angular/core';
import { PlanInterface } from '../../../interfaces/plan/plan-interface';
import { PlanService } from 'src/app/services/plan/plan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  plan: PlanInterface = {
    id: 0,
    nombre: '',
    descripcion: '',
  }

  edit: boolean = false;

  constructor(private planService:PlanService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.planService.consultarPlan(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.plan = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewPlan(){
    delete this.plan.id;
    console.log(this.plan)
    this.planService.guardarPlan(this.plan)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/plan']);
        },
        err => console.error(err)
      )
  }

  updatePlan() {
    console.log(this.plan)
    this.planService.updatePlan(this.plan.id, this.plan)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/plan']);
        },
        err => console.error(err)
      )
  }

}
