import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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

  updateMovie(movie:object){
    this.http.post(this.rootPath + "admin/addMovie",movie,{ responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
  }

  showMovies():Observable<any> {
    return this.http.get(this.rootPath + "admin/moviesList");
  }

  selectMovie(id:string):Observable<any> {
    return this.http.get(this.rootPath + "admin/selectMovie?id="+id);
  }

  updateStatus(status:string,id:string):Observable<any>{   
    return this.http.post(this.rootPath + "admin/updateStatus?status="+status+"&id="+id,{},{responseType:'text'});
  }

  showEnableMovies():Observable<any> {
    return this.http.get(this.rootPath + "admin/showEnableMovies");
  }

  addShow(show:object):Observable<any>{
    return this.http.post(this.rootPath + "admin/addShow",show,{responseType:'text'});
  }
  
  showList():Observable<any> {
    return this.http.get(this.rootPath + "admin/showList");
  }

  upcommingMovies():Observable<any> {
    return this.http.get(this.rootPath + "admin/getUpcomming");
  }
  getShowDetails(id:string):Observable<any> {
    return this.http.get(this.rootPath + "admin/getShowDetails?id="+id);
  }

  getShow(sid:string):Observable<any> {
    return this.http.get(this.rootPath + "admin/getShow?id="+sid);
  }

}
