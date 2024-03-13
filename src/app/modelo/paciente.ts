import { HistorialMedico } from "./historial-medico";
import { NuevoUsuario } from "./nuevo-usuario";
import { Persona } from "./persona";
import { Turno } from "./turno";

export class Paciente extends Persona {
    tipo_sangre: string;
    tiene_OS: boolean;
    obraSocial: string;
    turnos: Turno[];
    historialMedico:HistorialMedico;
  
    constructor(
      id: number,
      dni: number,
      nombre: string,
      apellido: string,
      telefono: string,
      direccion: string,
      fechaNacimiento: Date,
      email:string,
      tipo_sangre: string,
      tiene_OS: boolean,
      obraSocial: string,
      turnos: Turno[],
      historialMedico:HistorialMedico,
      img : string
   
    ) {
      super(id, dni, nombre, apellido, telefono, direccion, fechaNacimiento,email,img);
      this.tipo_sangre = tipo_sangre;
      this.tiene_OS = tiene_OS;
      this.obraSocial = obraSocial;
      this.turnos = turnos;
      this.historialMedico= historialMedico;
    }
  }