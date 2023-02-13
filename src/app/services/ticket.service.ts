import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  rootPath: string = "http://localhost:8090/movie/";
  constructor(private http: HttpClient) { }

  addTicket(ticket:object):Observable<any>{
    return this.http.post(this.rootPath + "addTicket",ticket,{ responseType: 'text' });
  }
  getTickets(uid:string):Observable<any>{
    return this.http.get(this.rootPath + "getTickets?uid="+uid);
  }

  getTicketsBySid(sid:string):Observable<any>{
    return this.http.get(this.rootPath + "getTicketsBySid?sid="+sid);
  }

  
}
