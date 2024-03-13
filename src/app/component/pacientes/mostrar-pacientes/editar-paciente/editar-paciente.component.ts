import { Component,OnInit } from '@angular/core';
import { PacienteService } from '../../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelo/persona';
import { Paciente } from 'src/app/modelo/paciente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  pacienteForm: FormGroup;
  pacienteId: number;
  



  constructor(
    private service:PacienteService,
    private router:Router,
    private toastr:ToastrService,
    private route:ActivatedRoute,
    private fb:FormBuilder
    
  ){

    this.pacienteForm = this.fb.group({

      id: [null], // Puedes inicializarlo con el valor correspondiente si estás editando
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipo_sangre: [''],
      tiene_OS: [false],
      obraSocial: [''],
      turnos: [[]], // Debes manejar la lógica para los turnos
      fechaNacimiento: [new Date()],
      telefono: [''],
      dni: [null, Validators.pattern(/^\d+$/)], // Asegúrate de que solo se permitan dígitos
      direccion: [''],
      responsable: [null] // Puedes inicializarlo con el valor correspondiente si está presente


    })

    this.pacienteId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    // Cargar datos del paciente para prellenar el formulario
    this.service.buscarPaciente(this.pacienteId).subscribe(paciente => {
      this.pacienteForm.patchValue(paciente);
    });
  }


  guardarCambios(): void {
    if (this.pacienteForm.valid) {
      const pacienteEditado = this.pacienteForm.value;
      this.service.editarPaciente(this.pacienteId, pacienteEditado).pipe(
        delay(1000) // Ajusta el valor según tus necesidades (1 segundo en este caso)
      ).subscribe(() => {
        this.mostrarNotificacion();
        this.router.navigate(['/component/pacientes']);
      });
    }
  }
  

  mostrarNotificacion() {
    this.toastr.success('Paciente guardado con éxito', 'Éxito');
  }
  }


