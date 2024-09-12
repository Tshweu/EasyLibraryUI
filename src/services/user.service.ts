import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {}

  login(data:any){
    return this._http.post<any>(`${environment.api}auth`,data);
  }

  logoutUser() {
    sessionStorage.removeItem('admin-token');
    sessionStorage.removeItem('adminemail');
    sessionStorage.removeItem('admin-role');
  }

  loggedIn() {
    return !!sessionStorage.getItem('admin-token');
  }

  getToken() {
    return sessionStorage.getItem('admin-token');
  }

  getUsers() {
    return this._http.get<any>(`${environment.api}/user`);
  }

}
