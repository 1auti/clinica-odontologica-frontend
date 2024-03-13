import { tick } from "@angular/core/testing";

export class PreguntasFrecuentes {

    id:number;
    pregunta:string;
    respondido:boolean;
    respuesta:string;

    constructor(
        id:number,
        pregunta:string,
        respondido:boolean,
        respuesta:string
    ){
        this.id = id,
        this.pregunta = pregunta,
        this.respondido = respondido,
        this.respuesta = respuesta
    }


}
