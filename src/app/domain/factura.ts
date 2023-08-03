import { Cliente } from "./cliente";
import { Ticket } from "./ticket";

export interface Factura{
    numero?: number;
    fecha?: string | null; // Permitimos que el campo sea de tipo string o null
    total?: number;
    cliente: Cliente;
    ticket: Ticket;

}