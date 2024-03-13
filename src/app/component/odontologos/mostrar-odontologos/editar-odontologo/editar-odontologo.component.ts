import { Component,OnInit } from '@angular/core';
import { OdontologosService } from '../../odontologos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Odontologo } from 'src/app/modelo/odontologo';
import { delay } from 'rxjs';

@Component({
  selector: 'app-editar-odontologo',
  templateUrl: './editar-odontologo.component.html',
  styleUrls: ['./editar-odontologo.component.scss']
})
export class EditarOdontologoComponent implements OnInit {


  odontologoForm: FormGroup;
  odontologoId: number;

  constructor(
    private router:Router,
    private service:OdontologosService,
    private toastr:ToastrService,
    private route:ActivatedRoute,
    private fb:FormBuilder
  ){

    this.odontologoForm = this.fb.group({
 

      id: [null], // Puedes inicializarlo con el valor correspondiente si estás editando
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: [new Date()],
      telefono: [''],
      dni: [null, Validators.pattern(/^\d+$/)], // Asegúrate de que solo se permitan dígitos
      direccion: [''],
      especialidad: [''],
      turnos: [[]], // Debes manejar la lógica para los turnos
      horario: this.fb.group({
        horario_inicio: [''],
        horario_fin: [''],
        dias: ['']
      })
    })

  
    this.odontologoId = +this.route.snapshot.paramMap.get('id')!;

  }

  ngOnInit(): void {
    // Cargar datos del paciente para prellenar el formulario
    this.service.buscarOdontologo(this.odontologoId).subscribe(Odontologo => {
      this.odontologoForm.patchValue(Odontologo);
    });
  }


  guardarCambios(): void {
    if (this.odontologoForm.valid) {
      const odontologoEditado = this.odontologoForm.value;
      this.service.editarOdontologo(this.odontologoId, odontologoEditado).pipe(
        delay(1000) // Ajusta el valor según tus necesidades (1 segundo en este caso)
      ).subscribe(() => {
        console.log("Odontologo",odontologoEditado);
        this.mostrarNotificacion();
        this.router.navigate(['/component/odontologos/mostrar-odontologos']);
      });
    }
  }

  mostrarNotificacion() {
    this.toastr.success('Odontologos guardado con éxito', 'Éxito');
  }
  }




