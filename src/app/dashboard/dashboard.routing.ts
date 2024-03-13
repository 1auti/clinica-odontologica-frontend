import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { CrearTurnoComponent } from "./dashboard-components/turno/crear-turno/crear-turno.component";
import { EspecialidadesOdontologosComponent } from "./dashboard-components/especialidades-odontologos/especialidades-odontologos.component";
import { ServiciosComponent } from "./dashboard-components/servicios/servicios.component";
import { MostrarPreguntasFrecuentesComponent } from "./dashboard-components/preguntas-frecuentes/mostrar-preguntas-frecuentes/mostrar-preguntas-frecuentes.component";
import { MostrarServiciosComponent } from "./dashboard-components/servicios/mostrar-servicios/mostrar-servicios.component";
import { MostrarEspecialidadesOdontologosComponent } from "./dashboard-components/especialidades-odontologos/mostrar-especialidades-odontologos/mostrar-especialidades-odontologos.component";
import { DescripcionEspecialidadComponent } from "./dashboard-components/especialidades-odontologos/mostrar-especialidades-odontologos/descripcion-especialidad/descripcion-especialidad.component";

export const DashboardRoutes: Routes = [
    
    
        {
            path: "",
            data: {
              title: "Dashboard",
              urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
            },
            component: DashboardComponent,
          },

          {

            path:'',
            children:[
                {
                    path:"especialidades-odontologos",
                    children:[
                        {
                            path:"mostrar",
                            component:MostrarEspecialidadesOdontologosComponent
                        },
                        {
                            path:"especialidad/:id",
                            component:DescripcionEspecialidadComponent
                        }
                       
                    ]
                },
                {
                   path:"preguntas-frecuentes",
                   children:[
                    {
                        path:"mostrar",
                        component:MostrarPreguntasFrecuentesComponent
                    }
                   ]
                },
                {
                    path:"servicios",
                    children:[
                        {
                            path:"mostrar",
                            component:MostrarServiciosComponent
                        }
                    ]
                },
                {
                    path:"turno",
                    children:[
                        {
                            path:"crearTurno",
                            component:CrearTurnoComponent
                        }
                    ]
                }
               
              
        
            ]


          }
       
      

]