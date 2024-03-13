import { Routes } from '@angular/router';

import { OdontologosComponent } from './odontologos/odontologos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AltaPacientesComponent } from './pacientes/alta-pacientes/alta-pacientes.component';
import { Component } from '@angular/core';
import { MostrarPacientesComponent } from './pacientes/mostrar-pacientes/mostrar-pacientes.component';
import { AltaOdontologosComponent } from './odontologos/alta-odontologos/alta-odontologos.component';
import { MostrarOdontologosComponent } from './odontologos/mostrar-odontologos/mostrar-odontologos.component';
import { DetallesPacienteComponent } from './pacientes/detalles-paciente/detalles-paciente.component';
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


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'odontologos',
				children:[{
					path:'alta-odontologos',
					component:AltaOdontologosComponent
				},
				{
					path:'mostrar-odontologos',
					component:MostrarOdontologosComponent
				},
				{
					path:'detalles-odontologo/:id',
					component:DetallesOdontologosComponent
				},
				{
					path:'editar-odontologo/:id',
					component:EditarOdontologoComponent
				},
				{
                    path:'mostrar-diagnosticos/:id',
					component:MostrarDiagnosticosComponent
				},
				{
					path:'editar-diagnosticos/:id',
					component:EditarDiagnosticoComponent
				},
				{
					path:'',
					component:OdontologosComponent,
					pathMatch:'full'
				}
			]
			},
			{
				path: 'pacientes',
				children:[
					{
				    path: 'altas-pacientes',
					component : AltaPacientesComponent
					}, 
					{
						path: 'mostrar-pacientes',
						component: MostrarPacientesComponent
					},
					{
						path:'detalles-paciente/:id',
						component:DetallesPacienteComponent
					},
					{
						path:'editar-paciente/:id',
						component:EditarPacienteComponent
					},
					{
						path:'',
						component:PacientesComponent,
						pathMatch:'full'
					}
			]
			},
			{
				path: 'usuarios',
				component: UsuariosComponent
			},
			
			{
				path:'historial',
				children:[
					{
						path: 'altaDiagnostico/:id',
						component: AltaDiagnosticoComponent
					},
					{
						path:'mostrarHistorial/:id',
				        component:HistorialComponent,
					},
					{
						path:'editarDiagnostico/:id',
						component:EditarDiagnosticoComponent
					}
					
				]
			
			},
			{
				path:"turno",
				children:[
					{
						path:'mostrarTurno/:id',
						component:TurnosComponent
					},
					{
						path:'altaTurno/:id',
						component:AltaTurnoComponent
					},
					{
						path:'detallesTurno/:id',
						component:DetallesTurnoComponent
					}
				]
			}
			
			
			

		]
	}
];
