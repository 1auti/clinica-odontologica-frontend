import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Odontologo } from 'src/app/modelo/odontologo';

@Injectable({
  providedIn: 'root'
})
export class OdontologosService {

  private apiUrl = 'http://localhost:8080/api/v1/odontologos';

  constructor(private http: HttpClient) {}

  getOdontologos(): Observable<Odontologo[]> {
    return this.http.get<Odontologo[]>(`${this.apiUrl}/traerOdontologos`);
  }

  getOdontologosPorEspecialidad(especialidad: string): Observable<Odontologo[]> {
    return this.http.get<Odontologo[]>(`${this.apiUrl}/traerOdontologos/tipoEspecialidad?especialidad=${especialidad}`);
  }

  crearOdontologo(odontologo: Odontologo, file: File): Observable<Odontologo> {
    const formData = new FormData();
    formData.append('file', file);
    
    const odontologoBlob = new Blob([JSON.stringify(odontologo)], { type: 'application/json' });
    formData.append('odontologo', odontologoBlob);

    const headers = new HttpHeaders();
    
    return this.http.post<Odontologo>(`${this.apiUrl}/crearOdontologos`, formData, { headers });
  }

  borrarOdontologo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrarOdontologo/${id}`);
  }

  editarOdontologo(id: number, odontologiaDto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/editarOdontolgo/${id}`, odontologiaDto);
  }

  detallesOdontologo(id: number): Observable<Odontologo> {
    return this.http.get<Odontologo>(`${this.apiUrl}/detallesOdontologo/${id}`);
  }

  buscarOdontologo(id: number): Observable<Odontologo> {
    return this.http.get<Odontologo>(`${this.apiUrl}/buscarOdontologo/${id}`);
  }

  buscarPorEmail(email: string): Observable<any> {
    return this.http.get<Odontologo>(`${this.apiUrl}/buscarOdontologoEmail?email=${email}`);
  }
  
}
