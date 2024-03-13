import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenServiceService } from './token-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,
    private tokenService:TokenServiceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('tuToken'); // Asegúrate de obtener el token desde donde lo almacenas

    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      this.tokenService.handleTokenExpiration(decodedToken.exp);
    }

    return next.handle(request);
  }
}