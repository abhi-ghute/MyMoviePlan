import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent {
  movie:any;
  show: any;
  ticketData: any;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService, private ticketService: TicketService) {
  }

  ngOnInit(): void {
    let uid = sessionStorage.getItem('id');
    console.log(uid);

    if (uid != null) {
      this.ticketService.getTickets(uid).subscribe(data => {
        this.ticketData = data;
        console.log(this.ticketData);
      });
    }

  }

  getMovie(mid:string){
    this.movieService.selectMovie(mid).subscribe(data => {
      this.movie = data;
      //console.log(data);
    });
  }
  
}
