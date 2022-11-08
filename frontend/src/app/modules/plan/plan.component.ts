import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan/plan.service';
import { PlanInterface } from '../../interfaces/plan/plan-interface';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  planes: any = [];

  constructor(private PlanService:PlanService) { }

  ngOnInit(): void {
    this.PlanService.consultarPlanes().subscribe(
      res => {
        this.planes = res;
      },
      err => console.error(err)
    );
  }

}
