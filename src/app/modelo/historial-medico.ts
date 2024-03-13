import { Diagnostico } from "./diagnostico";
import { Odontologo } from "./odontologo";
import { Paciente } from "./paciente";

export class HistorialMedico {

  id_historial: number;
  paciente: Paciente;
  diagnosticoList: Diagnostico[];

    constructor(
        id_historial:number,
        paciente:Paciente,
        diagnosticoList:Diagnostico[]

    ){
        this.id_historial = id_historial,
        this.paciente = paciente
        this.diagnosticoList = diagnosticoList

    }

}
