import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from 'src/app/modelo/diagnostico';
import { HistorialMedico } from 'src/app/modelo/historial-medico';
import { Paciente } from 'src/app/modelo/paciente';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private apiUrl = 'http://localhost:8080/api/v1/historial';

  constructor(private http: HttpClient) { 
  }

  
  traerHistorialMedico(): Observable<HistorialMedico[]> {
    return this.http.get<HistorialMedico[]>(`${this.apiUrl}/traerHistorialMedico`);
  }

  crearHistorialConDiagnostico(historialMedico: HistorialMedico): Observable<HistorialMedico> {
    return this.http.post<HistorialMedico>(`${this.apiUrl}/crearHistorialConDiagnostico`, historialMedico);
  }

  borrarHistorialMedico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/borrarOdontologo/${id}`);
  }

  obtenerDetallesHistorial(id: number): Observable<HistorialMedico> {
    return this.http.get<HistorialMedico>(`${this.apiUrl}/detallesHistorial/${id}`);
  }

  traerHistorialPorPaciente(pacienteId: number): Observable<HistorialMedico> {
    return this.http.get<HistorialMedico>(`${this.apiUrl}/traerHistorial/PorPaciente/${pacienteId}`);
  }

  traerDiagnosticosPorPaciente(pacienteId: number): Observable<Diagnostico[]> {
    return this.http.get<Diagnostico[]>(`${this.apiUrl}/traerDiagnostico/PorPaciente/${pacienteId}`);
  }

  getHistorialMedicoPorOdontologo(odontologoId: number): Observable<any[]> {
    const url = `${this.apiUrl}/traerHistorial/PorOdontologo/${odontologoId}`;
    return this.http.get<any[]>(url);
  }


  


}
