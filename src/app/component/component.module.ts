import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';

import { PacientesComponent } from './pacientes/pacientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { OdontologosComponent } from './odontologos/odontologos.component';
import { AltaOdontologosComponent } from './odontologos/alta-odontologos/alta-odontologos.component';
import { MostrarOdontologosComponent } from './odontologos/mostrar-odontologos/mostrar-odontologos.component';
import { MostrarPacientesComponent } from './pacientes/mostrar-pacientes/mostrar-pacientes.component';
import { AltaPacientesComponent } from './pacientes/alta-pacientes/alta-pacientes.component';
import { DetallesPacienteComponent } from './pacientes/detalles-paciente/detalles-paciente.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EditarPacienteComponent } from './pacientes/mostrar-pacientes/editar-paciente/editar-paciente.component';
import { DetallesOdontologosComponent } from './odontologos/detalles-odontologos/detalles-odontologos.component';
import { EditarOdontologoComponent } from './odontologos/mostrar-odontologos/editar-odontologo/editar-odontologo.component';
import { HistorialComponent } from './pacientes/mostrar-historial/historial.component';
import { AltaHistorialComponent } from './pacientes/mostrar-historial/alta-historial/alta-historial.component';
import { AltaDiagnosticoComponent } from './pacientes/mostrar-historial/diagnosticos/alta-diagnostico/alta-diagnostico.component';
import { TurnosComponent } from './turnos/turnos.component';
import { AltaTurnoComponent } from './turnos/alta-turno/alta-turno.component';
import { DetallesTurnoComponent } from './turnos/detalles-turno/detalles-turno.component';
import { EditarDiagnosticoComponent } from './pacientes/mostrar-historial/diagnosticos/editar-diagnostico/editar-diagnostico.component';
import { MostrarDiagnosticosComponent } from './odontologos/mostrar-odontologos/mostrar-diagnosticos/mostrar-diagnosticos.component';
import { MensajeModule } from '../mensaje/mensaje.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    MensajeModule
  
  ],
  declarations: [

    PacientesComponent,
    UsuariosComponent,
    OdontologosComponent,
    AltaOdontologosComponent,
    MostrarOdontologosComponent,
    AltaPacientesComponent,
    DetallesPacienteComponent,
    MostrarPacientesComponent,
    EditarPacienteComponent,
    DetallesOdontologosComponent,
    EditarOdontologoComponent,
    MostrarOdontologosComponent,
    HistorialComponent,
    AltaDiagnosticoComponent,
    TurnosComponent,
    AltaTurnoComponent,
    DetallesTurnoComponent,
    EditarDiagnosticoComponent,
    MostrarDiagnosticosComponent
  ],
  providers:[
    ToastrService,
    DatePipe
  ]
  
})
export class ComponentsModule { }
