import { Tarifa } from "./tarifa";
import { Vehiculo } from "./vehiculo";

export interface Ticket{
    estado: string;
    fechaIngreso: Date;
    fechaSalida: Date;
    numero: number;
    vehiculo: Vehiculo;
    tarifa: Tarifa;
    /*
    estado: string;
  fechaIngreso: Date;
  fechaSalida: Date;
  numero: number;
  tarifa: {
    id: number;
    monto: number;
    tipo: string;
  };
  vehiculo: {
    color: string;
    marca: string;
    modelo: string;
    placa: string;
  };
  */
}

/*
    estado: string;
  fechaIngreso: Date;
  fechaSalida: Date;
  numero: number;
    vehiculo: Vehiculo;
    tarifa: Tarifa;
*/