import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from 'src/app/modelo/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private apiUrl = 'http://localhost:8080/api/v1/turno';

  constructor(private http: HttpClient) {}

  traerTurnos(): Observable<Turno[]> {
    return this.http.get<Turno[]>(`${this.apiUrl}/traerTurnos`);
  }

  traerTurnosPorOdontologo(idOdontologo: number): Observable<Turno[]> {
    return this.http.get<Turno[]>(`${this.apiUrl}/traerTurnos/traerPorOdontologo/${idOdontologo}`);
  }

  traerTurnosPorPaciente(idPaciente: number): Observable<Turno[]> {
    return this.http.get<Turno[]>(`${this.apiUrl}/traerTurnos/traerPorPaciente/${idPaciente}`);
  }

  crearTurno(turno: Turno, file: File): Observable<Turno> {
    const formData = new FormData();
    formData.append('file', file);
    
    const turnoBlob = new Blob([JSON.stringify(turno)], { type: 'application/json' });
    formData.append('turno', turnoBlob);

    const headers = new HttpHeaders();
    
    return this.http.post<Turno>(`${this.apiUrl}/crear`, formData, { headers });
  }

  borrarTurno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/borrar/${id}`);
  }
/*
  editarTurno(id: number, turnoDto: Turno): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/editar/${id}`, turnoDto);
  }
  */

  obtenerDetallesTurno(id: number): Observable<Turno> {
    return this.http.get<Turno>(`${this.apiUrl}/detalles/${id}`);
  }
}
