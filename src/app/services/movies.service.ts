import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovie(language: string , page: number  ): Observable<any> {
    const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTIxOGIwNDk1ZjViNWFkNDcyZmU2YThjMzllODQyOCIsInN1YiI6IjY0NmE5ODM0MmJjZjY3MDE1NTgzN2ZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tXTIoSfet92Hgdmf39tOHRYH5slWxg18C9ofYZsOrCM';
   
    const headers = new HttpHeaders(
        {'Authorization': `Bearer ${Token}`})
    
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`, {headers: headers})
  }
}
