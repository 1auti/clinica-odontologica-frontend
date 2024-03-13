import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';
const EMAIL_KEY = 'AuthEmail';
const ROL_KEY = 'AuthRol';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  roles : Array<string> =[];

  constructor(
    private router:Router
  ) { }

  public SetToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  

  public setEmail(email:string) :void{
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY,email);
  }

  public getEmail(): string {
    return sessionStorage.getItem(EMAIL_KEY)!;
  }
  

  public setRol(rol:string[]):void{

    window.sessionStorage.removeItem(ROL_KEY);
    window.sessionStorage.setItem(ROL_KEY,JSON.stringify(rol));
  }

  public getRol(): string {
    return sessionStorage.getItem(ROL_KEY)!;
  }
  
  

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    } catch (error) {
      console.error("Error al decodificar o analizar el token:", error);
      return null;
    }
  }
  
  

  public logOut():void{
    window.sessionStorage.clear();
  }

  isTokenExpired(expirationDate: number): boolean {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return expirationDate < currentTimestamp;
  }

  handleTokenExpiration(expirationDate: number) {
    if (this.isTokenExpired(expirationDate)) {
      // El token ha expirado, redirige al usuario al inicio de sesión
      this.router.navigate(['/login']);
    }
  }

  



}
