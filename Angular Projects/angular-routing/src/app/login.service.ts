import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './model.login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpClient:HttpClient) { }

  checkUser():Observable<Login[]> {
    return this.httpClient.get<Login[]>("http://localhost:3000/login");
  }
}
