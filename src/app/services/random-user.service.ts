import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IRandomContac, Results } from '../Components/models/userrandom.interface';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log(`ha ocurrido un error ${error}`);
    } else {
      console.error(
        `erro en el backend ${error.status}. el error es: ${error.error}`
      );
    }
    return throwError(
      () => new Error('error en la peticion de contacto aleatorio')
    );
  }

  obtenerRandonUser(): Observable<Results> {
    return this.http
      .get<Results>('https://randomuser.me/api')
      .pipe(retry(2), // numero de reintentos de peticiones
       catchError(this.handleError));// sino sacamos error 
  }

  obtenerRandonUsersVarios(n: number, sexo?:string): Observable<Results> {
    let params: HttpParams = new HttpParams().set("results", n);

    if (sexo) {
      console.log('filtrado por mujer / hombre');
      params = params.append("gender", sexo);
    }

    return this.http
    .get<Results>('https://randomuser.me/api' , {params: params})
    .pipe(retry(2), // numero de reintentos de peticiones
     catchError(this.handleError));// sino sacamos error 
  }



}

//Observable<IRandomContac>
