import { Component, OnInit } from '@angular/core';
import { PreguntasFrecuentesService } from '../preguntas-frecuentes.service';
import { PreguntasFrecuentes } from 'src/app/modelo/preguntas-frecuentes';
import { ToastrService } from 'ngx-toastr';
import { TokenServiceService } from 'src/app/seguridad/service/token-service.service';

@Component({
  selector: 'app-mostrar-preguntas-frecuentes',
  templateUrl: './mostrar-preguntas-frecuentes.component.html',
  styleUrls: ['./mostrar-preguntas-frecuentes.component.scss']
})
export class MostrarPreguntasFrecuentesComponent implements OnInit {


  preguntas:PreguntasFrecuentes[] = [];
  respuesta:string = '';
  nuevaPregunta: PreguntasFrecuentes = new PreguntasFrecuentes(0,"",false,"");
  mostrarFormulario = false;
  pregunta:any = {"pregunta":"","respondido":false,"respuesta":""}
  mostrarFormularioRespuestaId: number | null = null;
  mostrar = false;
  

  constructor(
    private preguntasFrecuentesService:PreguntasFrecuentesService,
    private toastr:ToastrService,
    private tokenService:TokenServiceService
  ){

  }

  ngOnInit(): void {
      this.obtenerTodasLasPreguntas()
      const user = this.tokenService.getRol();
      
      if (user.includes("ADMIN")) {
        this.mostrar = true;
      } else {
        
        this.mostrar = false;
      } 
   
  }

  

  obtenerTodasLasPreguntas() {
    this.preguntasFrecuentesService.obtenerTodasLasPreguntas().subscribe(PreguntasFrecuentes => {
      this.preguntas = PreguntasFrecuentes;
    });
  }

  
  
  enviarRespuesta(id: number, respuesta: string) {
    console.log("respuesta:", respuesta);
    console.log("id", id);
    this.preguntasFrecuentesService.responderPregunta(id, respuesta).subscribe((response) => {
      console.log("Respuesta", response);
      this.obtenerTodasLasPreguntas();
    });
  }
  
  

  agregarPregunta() {
      // Asegúrate de que tu servicio tenga un método para crear una nueva pregunta
      this.preguntasFrecuentesService.crearPregunta(this.pregunta)
        .subscribe((PreguntasFrecuentes) => {
         console.log("pregunta",PreguntasFrecuentes);
         this.pregunta = PreguntasFrecuentes;
         this.obtenerTodasLasPreguntas();
           // Limpiar el campo de nuevaPregunta después de agregar la pregunta
        });
    }

    mostrarFormularioNuevaPregunta() {
      this.mostrarFormulario
    }

    mostrarFormularioRespuesta(pregunta: PreguntasFrecuentes) {
      this.mostrarFormularioRespuestaId = pregunta.id;
    }

    borrarPregunta(id:number){
      this.preguntasFrecuentesService.eliminarPregunta(id).subscribe(response =>{
        this.toastr.success("Se ha eliminado la pregunta");
        this.obtenerTodasLasPreguntas();
      })
    }

  }






