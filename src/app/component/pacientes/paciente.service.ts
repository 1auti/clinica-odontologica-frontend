import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Paciente } from 'src/app/modelo/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl = 'http://localhost:8080/api/v1/paciente'; // Reemplaza con la URL de tu servidor backend

  constructor(private http: HttpClient) {}

  
  traerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/traerPacientes`);
  }

  traerPacientesPorTipoSangre(tipoSangre: string): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/traerPacientes/tipoSangre?tipoSangre=${tipoSangre}`);
  }

  traerPacientesPorTipoObraSocial(tipoObraSocial: string): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/traerPacientes/tipoObraSocial?tipoObraSocial=${tipoObraSocial}`);
  }

  traerPacientesTenganObraSocial(tieneObraSocial: boolean): Observable<Paciente[]> {
    const params = new HttpParams().set('tieneObraSocial', tieneObraSocial.toString());
    return this.http.get<Paciente[]>(`${this.apiUrl}/traerPacientes/TenganObraSocial`, { params });
  }

  traerPacientesMenores(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/traerPacientes/traerMenores`);
  }

  traerPacientesMayores(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/traerPacientes/traerMayores`);
  }
  obtenerHistorialMedicoId(pacienteId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/obtenerHistorialId/${pacienteId}`);
  }

  crearPaciente(paciente: Paciente, file: File): Observable<Paciente> {
    const formData = new FormData();
    formData.append('file', file);
    
    const pacienteBlob = new Blob([JSON.stringify(paciente)], { type: 'application/json' });
    formData.append('pacienteRequest', pacienteBlob);

    const headers = new HttpHeaders();
    
    return this.http.post<Paciente>(`${this.apiUrl}/crearPaciente`, formData, { headers });
  }
  
  borrarPaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/borrarPaciente/${id}`);
  }

  
  editarPaciente(id: number, paciente: Paciente): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/editarPaciente/${id}`, paciente);
  }


  obtenerDetallesPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.apiUrl}/detallesPaciente/${id}`);
  }

  buscarPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.apiUrl}/buscarPaciente/${id}`);
  }

  buscarPorEmail(email:string):Observable<Paciente>{
    return this.http.get<Paciente>(`${this.apiUrl}/buscarPorEmail?email=${email}`);
  }

  
  
}
