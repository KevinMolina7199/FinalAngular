import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { TickedComponent } from './pages/ticked/ticked.component';
import { FacturaDetalleComponent } from './pages/factura-detalle/factura-detalle.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ImagenComponent } from './pages/imagen/imagen.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { TicketSComponent } from './pages/ticket-s/ticket-s.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VehiculoComponent,
    FacturaComponent,
    TickedComponent,
    FacturaDetalleComponent,
    CabeceraComponent,
    MenuComponent,
    ImagenComponent,
    InicioComponent,
    TarifaComponent,
    TicketComponent,
    TicketSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
