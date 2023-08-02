import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { TicketComponent } from './pages/ticket/ticket.component';

const routes: Routes = [
  {path: 'home', component: InicioComponent},
  {path: 'registarse', component: ClienteComponent},
  {path: 'registrarVehiculo', component: VehiculoComponent},
  {path: 'registrarTarifa', component: TarifaComponent},
  {path: 'registrarTicket', component: TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
