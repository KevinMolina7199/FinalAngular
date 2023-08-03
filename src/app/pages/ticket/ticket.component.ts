import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {  
  ticket: Ticket = {
    numero: 0,
    fechaIngreso: '',
    fechaSalida: '',
    estado: '',
    vehiculo: {
      placa: '',
      marca: '',
      modelo: '',
      color: ''
    },
    tarifa: {
      id: 1,
      tipo: '',
      monto: 0.5
    }
  };

  constructor(public ticketService: TicketService,public vehiculoService: VehiculoService, private router: Router) { }
  listadoTicketsWS: any[] = [];

  ngOnInit(): void {
    this.listarTickets();
    this.ticket.fechaIngreso = this.obtenerHoraActual();
  }

  agregarTicket() {
    if (this.ticket.fechaIngreso === '') {
      this.ticket.fechaIngreso = null;
    }
    if (this.ticket.fechaSalida === '') {
      this.ticket.fechaSalida = null;
    }
    if (this.ticket.estado === '') {
      this.ticket.estado = 'Activo';
    }
    this.ticketService.save(this.ticket).subscribe(
      response => {
        this.ticket = {numero: 0, fechaIngreso: this.obtenerHoraActual(), fechaSalida: '', estado: 'Activo',
          vehiculo: {
            placa: '',
            marca: '',
            modelo: '',
            color: ''
          },
          tarifa: {
            id: 1,
            tipo: '',
            monto: 0
          }
        };
        this.router.navigate(['registrarTicket']);
        this.listarTickets();
      },
      error => {
        console.log("${error}");
      }
    );
  }

  actualizarTicket() {
    if (this.ticket.fechaIngreso === '') {
      this.ticket.fechaIngreso = null;
    }
    if (this.ticket.fechaSalida === '') {
      this.ticket.fechaSalida = null;
    }
    if (this.ticket.estado === 'Activo') {
      this.ticket.estado = 'Inactivo';
    }
    this.ticketService.save(this.ticket).subscribe(
      response => {
        this.ticket = {numero: 0, fechaIngreso: this.obtenerHoraActual(), fechaSalida: '', estado: 'Activo',
          vehiculo: {
            placa: '',
            marca: '',
            modelo: '',
            color: ''
          },
          tarifa: {
            id: 1,
            tipo: '',
            monto: 0
          }
        };
        this.router.navigate(['registrarTicket']);
        this.listarTickets();
      },
      error => {
        console.log("${error}");
      }
    );
  }

  public listarTickets() {
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

  eliminarTicket(ticket: Ticket) {
    this.listarTickets();
    this.ticketService.delete(ticket).subscribe(
      response => {
        this.listarTickets();
      },
      error => {
        console.log("${error}");        
      }
    );
  }

  listar(ticket: Ticket){
    this.listarTickets();
    this.ticket = { numero: ticket.numero, fechaIngreso: ticket.fechaIngreso , fechaSalida: ticket.fechaSalida, estado: ticket.estado, vehiculo: ticket.vehiculo, tarifa: ticket.tarifa};
  }

  obtenerHoraActual(): string {
    const fechaActual = new Date();
    const hora = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
  }
  agregarHoraActual() {
    this.ticket.fechaSalida = this.obtenerHoraActual();
  }
  

}
