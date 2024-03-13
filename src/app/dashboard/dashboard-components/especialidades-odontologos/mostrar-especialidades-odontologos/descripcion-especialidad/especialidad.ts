export class Especialidad{
    id:number;
    nombre:string;
    descripcion:string;
    procedimientos:string;
    importancia:string;
    imagen:string;
    videoUrl;


    constructor(id:number,nombre:string,descripcion:string,procedimientos:string,importancia:string,imagen:string,videoUrl:string){
         this.id = id,
         this.nombre = nombre;
         this.descripcion = descripcion;
         this.procedimientos = procedimientos;
         this.importancia = importancia;
         this.imagen = imagen;
         this.videoUrl = videoUrl;
    }
}