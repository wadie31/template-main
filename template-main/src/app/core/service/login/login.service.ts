import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from '../../type/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  login(request: any): Observable<Ilogin> {
    return this._http.post<Ilogin>(
      'http://localhost:8080/authenticate',
      request
    );
  }
}
