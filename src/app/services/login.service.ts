import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootPath: string = "http://localhost:8090/movie/";
  constructor(private http: HttpClient) { }
  
  checklogin(login:object):Observable<any>{   
    return this.http.post(this.rootPath + "login",login);
  }
}
