import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { Ticket } from 'src/app/domain/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
//numero: '', estado: '', fechaIngreso: '', fechaSalida: '', vehiculo: '',tarifa: ''
  //ticket: Ticket = {numero: '', estado: '', fechaIngreso: '', fechaSalida: ''};
  ticket: Ticket = {
    numero: 0,
    fechaIngreso: new Date(),
    fechaSalida: new Date(),
    estado: '',
    vehiculo: {
      placa: '',
      marca: '',
      modelo: '',
      color: ''
    },
    tarifa: {
      id: 0,
      tipo: '',
      monto: 0
    }
  };
  //ticket: Ticket[] = [];
  
  constructor(public ticketService: TicketService,private router: Router){}
  listaVehiculos: any[] = []; // Asegúrate de llenar esta lista con los vehículos disponibles
  listaTarifas: any[] = []; // Asegúrate de llenar esta lista con las tarifas disponibles

  listadoTicketsWS: any[] = [];

  ngOnInit(): void {
    this.listarTickets();
  }

  guardarT1() {
    // Aquí puedes realizar la lógica para guardar los datos ingresados en el formulario
    // Por ejemplo, podrías enviar los datos a través de un servicio HTTP para guardarlos en el backend.
    // También puedes realizar otras validaciones o acciones necesarias antes de guardar.
  }
  public listarTickets (){
    this.ticketService.obtenerVehiculos().subscribe(
      (response) => {
        this.listadoTicketsWS = response;
        console.log('Listado de contactos:', this.listadoTicketsWS);
      },
      (error) => {
        console.error('Error al obtener la lista de contactos:', error);
      }
    );
  }

}
