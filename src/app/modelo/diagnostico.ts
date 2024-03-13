import { HistorialMedico } from "./historial-medico";
import { Odontologo } from "./odontologo";
import { Turno } from "./turno";

export class Diagnostico {

    id: number;
    diagnostico: string;
    odontologo: Odontologo;
    historialMedico: HistorialMedico;
    fechaTratamiento:Date;
   

    constructor(id:number,diagnostico:string,odontologo:Odontologo,historialMedico:HistorialMedico,fechaTratameinto:Date){
        this.id = id,
        this.diagnostico = diagnostico,
        this.odontologo = odontologo,
        this.historialMedico = historialMedico,
        this.fechaTratamiento = fechaTratameinto

    }
}
