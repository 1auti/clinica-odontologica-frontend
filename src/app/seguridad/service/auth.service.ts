import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/modelo/jwt-dto';
import { LoginUsuario } from 'src/app/modelo/login-usuario';
import { NuevoUsuario } from 'src/app/modelo/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  authURL = 'http://localhost:8080/api/v1/auth/';
  
  
  constructor(private  httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{

    return this.httpClient.post<any>(this.authURL + 'register',nuevoUsuario);

  }

  public login(loginUsuario : LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'authenticate',loginUsuario);
  }

  public logout(): Observable<any> {
    return this.httpClient.get(this.authURL + 'logout');
  }

}
