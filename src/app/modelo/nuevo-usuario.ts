import { Persona } from "./persona";

export class NuevoUsuario {

    id:number
    nombre:string;
    apellido:string;
    email:string;
    pass:string;
    rol:string;
    persona:Persona;


    constructor(id:number,nombre:string,apellido:string,email:string,pass:string,rol:string,persona:Persona){
       this.id = id;
       this.nombre = nombre;
       this.apellido = apellido;
       this.email = email;
       this.pass = pass;
       this.rol = rol;
       this.persona = persona;

    }
    
}
