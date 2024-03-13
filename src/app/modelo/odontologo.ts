import { Diagnostico } from "./diagnostico";
import { HistorialMedico } from "./historial-medico";
import { Horario } from "./horario";
import { NuevoUsuario } from "./nuevo-usuario";
import { Persona } from "./persona";
import { Turno } from "./turno";

export class Odontologo extends Persona {
  especialidad: string;
  turnosList: Turno[];
  horario: Horario;
  diagnosticos: Diagnostico[]; 

  constructor(
    id: number,
    dni: number,
    nombre: string,
    apellido: string,
    telefono: string,
    direccion: string,
    fechaNacimiento: Date,
    email: string,
    especialidad: string,
    turnosList: Turno[],
    horario: Horario,
    diagnosticos: Diagnostico[],
    img: string
  ) {
    super(id, dni, nombre, apellido, telefono, direccion, fechaNacimiento, email, img);
    this.especialidad = especialidad;
    this.turnosList = turnosList;
    this.horario = horario;
    this.diagnosticos = diagnosticos;
  }
}