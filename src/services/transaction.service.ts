import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ITransaction } from '../models/Itransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http: HttpClient) { }

  getTransactions(){
    return this._http.get<ITransaction[]>(`${environment.api}transaction`);
  }
}
