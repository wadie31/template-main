import { Injectable } from '@angular/core';
import { ITransaction } from '../../type/transaction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<ITransaction[]> {
    return this._http.get<ITransaction[]>('http://localhost:8080/transactions');
  }

  findAllWithQuery(request: any): Observable<ITransaction[]> {
    return this._http.get<ITransaction[]>(
      'http://localhost:8080/transactions/search',
      { params: request }
    );
  }

  add(request: any): Observable<ITransaction> {
    return this._http.post<ITransaction>(
      'http://localhost:8080/transactions',
      request
    );
  }

  edit(request: any, id: any): Observable<ITransaction> {
    return this._http.put<ITransaction>(
      'http://localhost:8080/transactions/' + id,
      request
    );
  }

  delete(id: any): Observable<void> {
    return this._http.delete<void>('http://localhost:8080/transactions/' + id);
  }
}
