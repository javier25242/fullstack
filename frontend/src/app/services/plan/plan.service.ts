import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanInterface } from '../../interfaces/plan/plan-interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  servidor = "http://localhost:3000";

  constructor(private servicio: HttpClient) { }

  consultarPlanes() {
    return this.servicio.get(`${this.servidor}/planes`);
  }

  consultarPlan(id: string){
    return this.servicio.get(`${this.servidor}/planes/${id}`);
  }

  guardarPlan(plan: PlanInterface){
    return this.servicio.post(`${this.servidor}/planes`, plan);
  }

  updatePlan(id: string, updatePlan: PlanInterface): Observable<PlanInterface>{
    return this.servicio.put(`${this.servidor}/planes/${id}`, updatePlan);
  }

  deletePlan(id: string){
    return this.servicio.delete(`${this.servidor}/planes/${id}`);
  }
}
