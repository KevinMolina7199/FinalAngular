import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Vehiculo} from '../domain/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }

  save(vehiculo: Vehiculo) {
    return this.http.post<any>("http://localhost:8080/ProyectoFinal/rs/vehiculos/", vehiculo)
  }

  public obtenerVehiculos(){
    let url = "http://localhost:8080/ProyectoFinal/rs/vehiculos/vehiculosListar/";
    return this.http.get<any>(url);     
  }

  delete(vehiculo: Vehiculo){
    const url = 'http://localhost:8080/ProyectoFinal/rs/vehiculos/';
  return this.http.delete(url, { body: vehiculo });
  }

  update(vehiculo: Vehiculo) {
    const url = 'http://localhost:8080/ProyectoFinal/rs/vehiculos/';
    return this.http.put(url, vehiculo);
  }
}
