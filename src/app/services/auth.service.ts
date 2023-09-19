import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //todo: login del usuario
   
  login(email: string, password: string){
    let body = {
      email: email,
      password: password
    }
    return this.http.post('https://reqres.in/api/login', body )
  }
}
