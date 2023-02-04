import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootPath: string = "http://localhost:8090/movie/";
  constructor(private http: HttpClient) { }

  checklogin(login:object){
    this.http.post(this.rootPath + "login",login).subscribe(data => {
      console.log(data);
    });
  }
}
