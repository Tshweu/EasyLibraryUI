import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../models/Ibook';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  getBooks(){
    return this._http.get<IBook[]>(`${environment.api}book`);
  }

  createBook(book: IBook){
    return this._http.post<IBook>(`${environment.api}book`,book);
  }
}
