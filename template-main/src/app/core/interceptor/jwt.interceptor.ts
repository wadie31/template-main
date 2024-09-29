import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtTokenService } from '../jwt/jwt-token.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private jwtTokenService: JwtTokenService,
    private message: NzMessageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.jwtTokenService.getToken();

    if (token != null && !this.jwtTokenService.isTokenExpired()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    } else if (token != null && this.jwtTokenService.isTokenExpired()) {
      this.message.warning('Session expired');
      this.jwtTokenService.logout();
    }
    return next.handle(request);
  }
}
