import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  rootPath: string = "http://localhost:8090/movie/";
  constructor(private http: HttpClient) { }

  addMovie(movie:object){
    this.http.post(this.rootPath + "admin/addMovie",movie,{ responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
  }
  
}
