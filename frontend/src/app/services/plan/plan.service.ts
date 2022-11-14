import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanInterface } from '../../interfaces/plan/plan-interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  servidor = "http://localhost:3000/";

  constructor(private servicio: HttpClient) { }

  consultarPlanes() {
    return this.servicio.get(`${this.servidor}plan/`);
  }

  consultarPlan(IDPlan: number){
    return this.servicio.get(`${this.servidor}plan${IDPlan}`);
  }

  guardarPlan(plan: PlanInterface){
    return this.servicio.post(`${this.servidor}plan`, plan);
  }

  updatePlan(IDPlan: number|undefined, updatePlan: PlanInterface): Observable<PlanInterface>{
    return this.servicio.put(`${this.servidor}plan/${IDPlan}`, updatePlan);
  }

  deletePlan(IDPlan: number){
    return this.servicio.delete(`${this.servidor}plan/${IDPlan}`);
  }
}
