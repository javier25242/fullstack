import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan/plan.service';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor(private PlanesService:PlanService) { }

  ngOnInit(): void {
    this.PlanesService.ConsultarPlanes().subscribe(datos => {
      console.log(datos);
    });
  }

}
