import { Diagnostico } from "./diagnostico";
import { Odontologo } from "./odontologo";
import { Paciente } from "./paciente";

export class Turno {

    id: number;
    fecha: Date;
    horario:string;
    odontologo:Odontologo;
    paciente:Paciente;
    afeccion:string;
  
  
    constructor(id: number, fecha: Date, odontologo: Odontologo, paciente:Paciente,afeccion:string,horario:string) {
      this.id = id;
      this.fecha = fecha;
      this.horario = horario;
      this.odontologo = odontologo;
      this.paciente = paciente;
      this.afeccion = afeccion;

    }
  }