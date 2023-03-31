export enum Deporte {
    futbol, basquet, zumba, voley, natacion , gym

}
import MiembroClub from "./AbstractMiembroclub";
export class Jugador extends  MiembroClub {
    deporte: Deporte;
    constructor (nombre: string, apellido: string, fechaNacimiento: string, 
        documento:number, telefono:number, deporte:Deporte){
    super( nombre, apellido, fechaNacimiento, documento, telefono)
    this.deporte = deporte;
        }
}