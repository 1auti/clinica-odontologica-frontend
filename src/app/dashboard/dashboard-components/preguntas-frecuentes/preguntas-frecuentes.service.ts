import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreguntasFrecuentes } from 'src/app/modelo/preguntas-frecuentes';

@Injectable({
  providedIn: 'root'
})
export class PreguntasFrecuentesService {

  private baseUrl = 'http://localhost:8080/api/v1/preguntasFrecuentes';

  constructor(private http: HttpClient) { }

  obtenerTodasLasPreguntas(): Observable<PreguntasFrecuentes[]> {
    return this.http.get<PreguntasFrecuentes[]>(`${this.baseUrl}/traerPreguntas`);
  }

  obtenerPreguntasPorRespondido(respondido: boolean): Observable<PreguntasFrecuentes[]> {
    return this.http.get<PreguntasFrecuentes[]>(`${this.baseUrl}/traerPreguntas/porRespondido/${respondido}`);
  }

  obtenerPreguntaPorId(id: number): Observable<PreguntasFrecuentes> {
    return this.http.get<PreguntasFrecuentes>(`${this.baseUrl}/traerPregunta/${id}`);
  }

  crearPregunta(pregunta: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/crearPregunta`, pregunta);
  }

  responderPregunta(id: number, respuesta: string): Observable<any> {
    // Construir los parámetros de la consulta
    const params = new HttpParams().set('respuesta', respuesta);

    // Realizar la solicitud HTTP con los parámetros de la consulta
    return this.http.post<any>(`${this.baseUrl}/responderPregunta/${id}`, null, { params });
  }
  
  

  eliminarPregunta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminarPregunta/${id}`);
  }
}
