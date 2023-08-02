import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})


export class VehiculoComponent {
  
  coloresPredefinidos = ['Motocicleta', 'Automovil', 'Camion'];
  vehiculo: Vehiculo = {placa: '', marca: '', modelo: '', color: ''};
  
  constructor(public vehiculoService: VehiculoService,private router: Router){}
  listadoVehiculosWS: any[] = [];

  ngOnInit(): void {
    this.listarVehiculos();
  }

  agregarVehiculo() {
    this.vehiculoService.save(this.vehiculo).subscribe(
      response => {
        this.vehiculo = { placa: '', marca: '', modelo: '', color: ''};
        this.router.navigate(['registrarVehiculo']);
        this.listarVehiculos();
      },
      error => {
        console.log("${error}");
      }
    );
  }
  
  public listarVehiculos (){
    this.vehiculoService.obtenerVehiculos().subscribe(
      (response) => {
        this.listadoVehiculosWS = response;
        console.log('Listado de contactos:', this.listadoVehiculosWS);
      },
      (error) => {
        console.error('Error al obtener la lista de contactos:', error);
      }
    );
  }

  eliminarVehiculo(vehiculo: Vehiculo) {
    this.listarVehiculos();
    this.vehiculoService.delete(vehiculo).subscribe(
      response => {
        this.vehiculo = { placa: '', marca: '', modelo: '', color: ''};
        this.listarVehiculos();
      },
      error => {
        console.log("${error}");        
      }
    );
  }

  listar(cliente: Vehiculo){
    this.listarVehiculos();
    this.vehiculo = { placa: cliente.placa, marca: cliente.marca , modelo: cliente.modelo, color: cliente.color};
  }

  private clienteSource = new BehaviorSubject<Vehiculo | null>(null);
  currentPersona = this.clienteSource.asObservable();
  
  changePersona(cliente: Vehiculo) {
    this.clienteSource.next(cliente);
  }

  editar(cliente: Vehiculo) {
    this.changePersona(cliente);
    this.router.navigate(['pages/persona-update']);
  }

}
