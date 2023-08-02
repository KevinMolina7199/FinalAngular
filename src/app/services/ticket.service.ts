import { Injectable } from '@angular/core';
import { Ticket } from '../domain/ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  save(ticket: Ticket) {
    return this.http.post<any>("http://localhost:8080/ProyectoFinal/rs/tickets/", ticket)
  }

  public obtenerVehiculos(){
    let url = "http://localhost:8080/ProyectoFinal/rs/tickets/ticketsListar";
    return this.http.get<any>(url);     
  }

  delete(ticket: Ticket){
    const url = 'http://localhost:8080/ProyectoFinal/rs/tickets/';
  return this.http.delete(url, { body: ticket });
  }

  update(ticket: Ticket) {
    const url = 'http://localhost:8080/ProyectoFinal/rs/tickets/';
    return this.http.put(url, ticket);
  }
}
