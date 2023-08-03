import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../domain/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  save(factura: Factura) {
    return this.http.post<any>("http://localhost:8080/ProyectoFinal/rs/facturas/", factura)
  }

  public obtenerVehiculos() {
    let url = "http://localhost:8080/ProyectoFinal/rs/facturas/facturasListar";
    return this.http.get<any>(url);
  }

  delete(factura: Factura) {
    const url = 'http://localhost:8080/ProyectoFinal/rs/facturas/';
    return this.http.delete(url, { body: factura });
  }

  update(factura: Factura) {
    const url = 'http://localhost:8080/ProyectoFinal/rs/facturas/';
    return this.http.put(url, factura);
  }

  calcular(factura: Factura) {
    const url = 'http://localhost:8080/ProyectoFinal/rs/facturas/calcular/';
    return this.http.put(url, factura);
  }

}
