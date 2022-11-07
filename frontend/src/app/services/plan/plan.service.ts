import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  servidor="http://127.0.0.1:25000";

  constructor(private servicio:HttpClient) { }

  ConsultarPlanes():Observable<any>{
    return this.servicio.get( `${this.servidor}/plan`);
  }
}
