import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

 
  rootPath: string = "http://localhost:8090/movie/";
  constructor(private http: HttpClient) { }

  register(user:object) {
    this.http.post(this.rootPath + "user/register",user,{ responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
  }
}
