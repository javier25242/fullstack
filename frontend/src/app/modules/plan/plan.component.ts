import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan/plan.service';


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
      (res:any) => {
        console.log(res);
        this.planes = res?.data;
      },
      err => console.error(err)
    );
  }

  deletePlan(IDPlan: number){
    this.PlanService.deletePlan(IDPlan).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
