import { Component, OnInit, HostBinding } from '@angular/core';
import { PlanInterface } from '../../../interfaces/plan/plan-interface';
import { PlanService } from 'src/app/services/plan/plan.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  /*plan: PlanInterface = {
    IDPlan: 0,
    Nombre: '',
    Precio: 0,
    Descripcion: '',
  };*/

  edit: boolean = false;

  constructor(private planService:PlanService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  /*updateGame() {
    this.planService.updatePlan(this.plan.id, this.plan)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/plan']);
        },
        err => console.error(err)
      )
  }*/
}
