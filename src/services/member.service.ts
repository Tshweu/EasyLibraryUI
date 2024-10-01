import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ILibraryMember } from '../models/Ilibrary_member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private _http: HttpClient) { }

  getMember(id:string){
    return this._http.get<ILibraryMember>(`${environment.api}member/${id}`)
  }

  getMembers(){
    return this._http.get<ILibraryMember[]>(`${environment.api}member`)
  }
}
