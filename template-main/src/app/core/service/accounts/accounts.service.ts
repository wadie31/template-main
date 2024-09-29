import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../../type/transaction';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<IAccount[]> {
    return this._http.get<IAccount[]>('http://localhost:8080/accounts');
  }
}
