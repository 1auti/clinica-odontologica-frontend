import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-alta-pacientes',
    templateUrl: './alta-pacientes.component.html',
    styleUrls: ['./alta-pacientes.component.scss']
})
export class AltaPacientesComponent implements OnInit {
    nuevoPaciente: any = {};
    selectedImage!: File;
    tipoSangreOptions: string[] = ['A+', 'O+', 'B+', 'AB+', 'A-', 'O-', 'B-', 'AB-'];
   

    constructor(
        private service: PacienteService,
        private toastr: ToastrService,
        private router: Router,
        private fb: FormBuilder,  // Inyectamos FormBuilder
    ) {
    }

    ngOnInit(): void {
        
    }

    onFileSelected(event: any): void {
        this.selectedImage = event.target.files[0] as File;
    }

    crearPaciente(): void {
        // Usamos this.nuevoPacienteForm.value en lugar de this.nuevoPaciente
        console.log("paciente:",this.nuevoPaciente);
        console.log("Foto:",this.selectedImage);
        this.service.crearPaciente(this.nuevoPaciente, this.selectedImage).subscribe(response => {
            console.log("Guardado con éxito", response);
            this.mostrarNotificacion();
            this.volverPacientes();
        });
    }

    mostrarNotificacion() {
        this.toastr.success('Paciente guardado con éxito', 'Éxito');
    }

    volverPacientes() {
        this.router.navigate(['/component/pacientes']);
    }
}
