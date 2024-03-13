import { NuevoUsuario } from "./nuevo-usuario";

export class Persona {

    id: number;
    dni: number;
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
    fechaNacimiento: Date;
    email:string;
    user!:NuevoUsuario;
    img?:string;
  
  
    constructor(
      id: number,
      dni: number,
      nombre: string,
      apellido: string,
      telefono: string,
      direccion: string,
      fechaNacimiento: Date,
      email:string,
      img:string

    ) {
      this.id = id;
      this.dni = dni;
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.direccion = direccion;
      this.fechaNacimiento = fechaNacimiento;
      this.email = email;
      this.img = img;
    
    }

}
