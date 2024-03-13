import { Odontologo } from "./odontologo";

export class Horario {

    id: number;
    dias: string;
    horario_inicio: string;
    horario_fin: string;
    
  
    constructor(id: number,dias: string, horario_inicio: string,horario_fin: string) {
      this.id = id;
      this.horario_inicio = horario_inicio;
      this.horario_fin = horario_fin;
      this.dias = dias;
      
    }
  }

  