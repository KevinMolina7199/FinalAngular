import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Tarifa } from 'src/app/domain/tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.scss']
})
export class TarifaComponent {

  tarifa: Tarifa = {id: 0, tipo: 'A', monto: 0};
  constructor(public clienteService: TarifaService,private router: Router){}
  listadoClientesWS: any[] = [];

  ngOnInit(): void {
    this.listarClientes();
  }

  agregarPersona() {
    this.clienteService.save(this.tarifa).subscribe(
      response => {
        this.tarifa = { id: 0, tipo: 'A', monto: 0};
        this.router.navigate(['registrarTarifa']);
        this.listarClientes();
      },
      error => {
        console.log("${error}");
      }
    );
  }

  public listarClientes (){
    this.clienteService.obtenerClientes().subscribe(
      (response) => {
        this.listadoClientesWS = response;
        console.log('Listado de contactos:', this.listadoClientesWS);
      },
      (error) => {
        console.error('Error al obtener la lista de contactos:', error);
      }
    );
  }

  eliminarPersona(tarifa: Tarifa) {
    this.listarClientes();
    this.clienteService.delete(tarifa).subscribe(
      response => {
        this.tarifa = { id: 0, tipo: 'A', monto: 0};
        this.listarClientes();
      },
      error => {
        console.log("${error}");        
      }
    );
  }

  listar(tarifa: Tarifa){
    this.listarClientes();
    this.tarifa = { id: tarifa.id, tipo: tarifa.tipo , monto: tarifa.monto};
  }

  private clienteSource = new BehaviorSubject<Tarifa | null>(null);
  currentPersona = this.clienteSource.asObservable();
  changePersona(tarifa: Tarifa) {
    this.clienteSource.next(tarifa);
  }

  editar(tarifa: Tarifa) {
    this.changePersona(tarifa);
    this.router.navigate(['pages/persona-update']);
  }
}
