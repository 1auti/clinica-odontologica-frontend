import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from 'src/app/modelo/diagnostico';
import { Odontologo } from 'src/app/modelo/odontologo';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticosService {

  private apiUrl = 'http://localhost:8080/api/v1/historial/diagnostico';

  constructor(private http:HttpClient) { }

  traerDiagnosticos(): Observable<Diagnostico[]> {
    return this.http.get<Diagnostico[]>(`${this.apiUrl}/traerDiagnosticos`);
  }

  crearDiagnostico(historialId: number, diagnostico: Diagnostico): Observable<Diagnostico> {
    return this.http.post<Diagnostico>(`${this.apiUrl}/crearDiagnostico/${historialId}`, diagnostico);
  }

  borrarDiagnostico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/borrarDiagnostico/${id}`);
  }

  
  actualizarDiagnostico(id: number, diagnosticoDto: Diagnostico): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/editarDiagnostico/${id}`, diagnosticoDto);
  }
  

  obtenerDetallesDiagnostico(id: number): Observable<Diagnostico> {
    return this.http.get<Diagnostico>(`${this.apiUrl}/detallesDiagnostico/${id}`);
  }

  traerDiagnosticosPorDiagnostico(diagnostico: string): Observable<Diagnostico[]> {
    return this.http.get<Diagnostico[]>(`${this.apiUrl}/traerDiagnostico/PorDiagnostico?diagnostico=${diagnostico}`);
  }

  traerDiagnosticosPorFechas(fechaInicio: Date, fechaFin: Date): Observable<Diagnostico[]> {
    return this.http.get<Diagnostico[]>(`${this.apiUrl}/traerDiagnostico/PorFechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }

  traerDiagnosticosPorFechaTratamiento(fechaTratamiento: string): Observable<Diagnostico[]> {
    return this.http.get<Diagnostico[]>(`${this.apiUrl}/traerDiagnostico/fechaTratamiento/${fechaTratamiento}`);
  }

  traerDiagnosticosPorOdontologo(idOdontologo: number): Observable<Diagnostico[]> {
    return this.http.get<Diagnostico[]>(`${this.apiUrl}/traerDiagnostico/PorOdontologo/${idOdontologo}`);
  }

  obtenerDiagnosticosPorPaciente(pacienteId: number): Observable<Diagnostico[]> {
    return this.http.get<Diagnostico[]>(`${this.apiUrl}/traerDiagnosticos/porPaciente/${pacienteId}`);
  }

  obtenerDiagnosticoPorId(diagnosticoId: number): Observable<any> {
    const url = `${this.apiUrl}/traerDiagnostico/${diagnosticoId}`;
    return this.http.get(url);
  }


}
