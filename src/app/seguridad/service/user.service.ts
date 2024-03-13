import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoUsuario } from 'src/app/modelo/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private apiUrl = 'http://localhost:8080/api/v1/user';

  constructor(private http: HttpClient) {}

  traerUsuarios(): Observable<NuevoUsuario[]> {
    return this.http.get<NuevoUsuario[]>(`${this.apiUrl}/traerUsuarios`);
  }

  borrarUsuario(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/borrarUsuario/${id}`);
  }

  traerUsuario(email: string): Observable<NuevoUsuario> {
    return this.http.get<NuevoUsuario>(`${this.apiUrl}/traerUsuario?email=${email}`);
  }

}
