import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
   //listaClientes: Cliente[]=[];

  constructor(private http: HttpClient) { }
  
  save(cliente: Cliente) {
    return this.http.post<any>("http://localhost:8080/ProyectoFinal/rs/clientes/", cliente)
  }

  public obtenerClientes(){
    let url = "http://localhost:8080/ProyectoFinal/rs/clientes/clienteL";
    return this.http.get<any>(url);     
  }

  delete(cliente: Cliente){
    const url = 'http://localhost:8080/ProyectoFinal/rs/clientes/';
  return this.http.delete(url, { body: cliente });
  }

  update(cliente: Cliente) {
    const url = 'http://localhost:8080/ProyectoFinal/rs/clientes/';
    return this.http.put(url, cliente);
  }
}