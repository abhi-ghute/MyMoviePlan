import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-app-payment',
  templateUrl: './app-payment.component.html',
  styleUrls: ['./app-payment.component.css']
})
export class AppPaymentComponent implements OnInit{
  ticketData:any;
  movie:any;

  constructor(private route:ActivatedRoute,private router:Router,private ticketService:TicketService,private movieService:MovieService) {
    this.ticketData = this.route.snapshot.queryParams;
    console.log(this.ticketData);
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("id") == undefined ||sessionStorage.getItem("id")==''|| sessionStorage.getItem("id")==null)
    {
      this.router.navigate(['/user/login']);
    }
  }

  pay(){
    this.ticketService.addTicket(this.ticketData).subscribe(data => {
      this.router.navigate(['/user/ticket'],{queryParams:this.ticketData});
    });

  }
}
