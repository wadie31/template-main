import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPaymentMethod } from '../../type/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodsService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<IPaymentMethod[]> {
    return this._http.get<IPaymentMethod[]>(
      'http://localhost:8080/api/payment-methods'
    );
  }
}
