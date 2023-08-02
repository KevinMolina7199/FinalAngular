import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  cliente: Cliente = {cedula: '', nombre: '', apellido: '', direccion: '', telefono: ''};
  constructor(public clienteService: ClienteService,private router: Router){}
  listadoClientesWS: any[] = [];

  ngOnInit(): void {
    this.listarClientes();
  }

  agregarPersona() {
    this.clienteService.save(this.cliente).subscribe(
      response => {
        this.cliente = { cedula: '', nombre: '', apellido: '', direccion: '', telefono: ''};
        this.router.navigate(['registarse']);
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

  eliminarPersona(cliente: Cliente) {
    this.listarClientes();
    this.clienteService.delete(cliente).subscribe(
      response => {
        this.cliente = { cedula: '', nombre: '', apellido: '', direccion: '', telefono: ''};
        this.listarClientes();
      },
      error => {
        console.log("${error}");        
      }
    );
  }

  listar(cliente: Cliente){
    this.listarClientes();
    this.cliente = { cedula: cliente.cedula, nombre: cliente.nombre , apellido: cliente.apellido, direccion: cliente.direccion, telefono: cliente.telefono};
  }

  private clienteSource = new BehaviorSubject<Cliente | null>(null);
  currentPersona = this.clienteSource.asObservable();
  changePersona(cliente: Cliente) {
    this.clienteSource.next(cliente);
  }

  editar(cliente: Cliente) {
    this.changePersona(cliente);
    this.router.navigate(['pages/persona-update']);
  }

}
