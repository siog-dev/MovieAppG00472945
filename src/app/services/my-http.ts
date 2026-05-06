import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyHttp {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/trending/movie/day?api_key=862da29609cec096571a286070ebb32d")
  }
  
}
