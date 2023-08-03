import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/domain/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  factura: Factura = {
    numero: 0,
    fecha: this.obtenerHoraActual(),
    total: 0,
    cliente: {
      apellido: "Peralta",
      cedula: "0105322291",
      direccion: "Octavio",
      nombre: "Danny",
      telefono: "0998446050"
  },
    ticket: {
      estado: "Activo",
      fechaIngreso: "18:05:35",
      fechaSalida: "14:30:00",
      numero: 1,
      tarifa: {
          id: 1,
          monto: 1.5,
          tipo: "Normal"
      },
      vehiculo: {
          color: "Plateado",
          marca: "Chevrolet",
          modelo: "Corsa Evo",
          placa: "AFT0976"
      }
  }
  };

  constructor(public facturaService: FacturaService, private router: Router) { }
  listadoFacturasWS: any[] = [];

  ngOnInit(): void {
    this.listarTickets();
  }


  public listarTickets() {
    this.facturaService.obtenerVehiculos().subscribe(
      (response) => {
        this.listadoFacturasWS = response;
        console.log('Listado de contactos:', this.listadoFacturasWS);
      },
      (error) => {
        console.error('Error al obtener la lista de contactos:', error);
      }
    );
  }

  obtenerHoraActual(): string {
    const fechaActual = new Date();
    const hora = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
  }

  agregarFactura() {
    if (this.factura.fecha === '') {
      this.factura.fecha = null;
    }

    if (this.factura.numero === 0) {
      this.listarTickets();
      this.calcularCosto();
      
      /*
      this.facturaService.save(this.factura).subscribe(
        response => {
          this.factura = {numero: 0,
            fecha: this.obtenerHoraActual(), // Permitimos que el campo sea de tipo string o null
            total: 0,
            cliente: {
              apellido: "Peralta",
              cedula: "0105322291",
              direccion: "Octavio",
              nombre: "Danny",
              telefono: "0998446050"
          },
            ticket: {
              estado: "Activo",
              fechaIngreso: "18:05:35",
              fechaSalida: "14:30:00",
              numero: 1,
              tarifa: {
                  id: 1,
                  monto: 1.5,
                  tipo: "Normal"
              },
              vehiculo: {
                  color: "Plateado",
                  marca: "Chevrolet",
                  modelo: "Corsa Evo",
                  placa: "AFT0976"
              }
          }
          };
          this.router.navigate(['registrarFactura']);
          //this.calcularCosto();
          this.listarTickets();
        },
        error => {
          console.log("${error}");
        }
      );
      */
    }else{
      this.listarTickets();
      this.calcularCosto();
    }
  }

  calcularCosto() {
    this.facturaService.calcular(this.factura).subscribe(
      response => {
        this.router.navigate(['registrarFactura']);
        this.listarTickets();
      },
      error => {
        console.log("${error}");
      }
    );
  }

  listar(factura: Factura){
    this.listarTickets();
    this.factura = { numero: factura.numero, total: factura.total , fecha: factura.fecha, ticket: factura.ticket, cliente: factura.cliente};
    this.calcularCosto();
  }

  actualizarFactura() {
    this.facturaService.update(this.factura).subscribe(
      (response) => {
        this.router.navigate(['registrarFactura']); // refrescar la lista después de la edición
      },
      (error) => {
        console.log("${error}");
      }
    );

  }

  eliminarFactura(factura: Factura) {
    this.listarTickets();
    this.facturaService.delete(factura).subscribe(
      response => {
        this.listarTickets();
      },
      error => {
        console.log("${error}");        
      }
    );
  }

}
