import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarifa } from '../domain/tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  constructor(private http: HttpClient) { }
  
  save(tarifa: Tarifa) {
    return this.http.post<any>("http://localhost:8080/ProyectoFinal/rs/tarifas/", tarifa)
  }

  public obtenerClientes(){
    let url = "http://localhost:8080/ProyectoFinal/rs/tarifas/tarifasListar";
    return this.http.get<any>(url);     
  }

  delete(tarifa: Tarifa){
    const url = 'http://localhost:8080/ProyectoFinal/rs/tarifas/';
  return this.http.delete(url, { body: tarifa });
  }

  update(tarifa: Tarifa) {
    const url = 'http://localhost:8080/ProyectoFinal/rs/tarifas/';
    return this.http.put(url, tarifa);
  }
}
