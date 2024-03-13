import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { CrearTurnoComponent } from './dashboard-components/turno/crear-turno/crear-turno.component';
import { DashboardRoutes } from "./dashboard.routing";
import { TurnoComponent } from "./dashboard-components/turno/turno.component";
import { PreguntasFrecuentesComponent } from "./dashboard-components/preguntas-frecuentes/preguntas-frecuentes.component";
import { MostrarPreguntasFrecuentesComponent } from "./dashboard-components/preguntas-frecuentes/mostrar-preguntas-frecuentes/mostrar-preguntas-frecuentes.component";
import { ServiciosComponent } from "./dashboard-components/servicios/servicios.component";
import { EspecialidadesOdontologosComponent } from "./dashboard-components/especialidades-odontologos/especialidades-odontologos.component";
import { MostrarServiciosComponent } from './dashboard-components/servicios/mostrar-servicios/mostrar-servicios.component';
import { MostrarEspecialidadesOdontologosComponent } from './dashboard-components/especialidades-odontologos/mostrar-especialidades-odontologos/mostrar-especialidades-odontologos.component';
import { DescripcionEspecialidadComponent } from './dashboard-components/especialidades-odontologos/mostrar-especialidades-odontologos/descripcion-especialidad/descripcion-especialidad.component';
import { MensajeModule } from "../mensaje/mensaje.module";





@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgApexchartsModule,
    MensajeModule
  ],
  declarations: [
    DashboardComponent,
    CrearTurnoComponent,
    TurnoComponent,
    PreguntasFrecuentesComponent,
    MostrarPreguntasFrecuentesComponent,
    ServiciosComponent,
    EspecialidadesOdontologosComponent,
    MostrarServiciosComponent,
    MostrarEspecialidadesOdontologosComponent,
    DescripcionEspecialidadComponent
    
    
  ],
})
export class DashboardModule {}
