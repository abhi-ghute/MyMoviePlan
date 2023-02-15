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
  movie: any[] = [];
  show: any[]=[];
  ticketData: any;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService, private ticketService: TicketService) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("id") == undefined || sessionStorage.getItem("id") == '' || sessionStorage.getItem("id") == null) {
      this.router.navigate(['/login']);
    }

    let uid = sessionStorage.getItem('id');

    if (uid != null) {
      this.ticketService.getTickets(uid).subscribe(data => {
        this.ticketData = data;
        console.log(this.ticketData);

        for (let t of this.ticketData) {
          this.movieService.selectMovie(t.mid).subscribe(data => {
            this.movie.push(data);
            console.log(this.movie);
          });
          this.movieService.getShow(t.sid).subscribe(data => {
            this.show.push(data);
            console.log(this.show);
          });
        }

      });
    }

  }

  // getData(mid:string,tid:string){
  //   this.movieService.selectMovie(mid).subscribe(data => {
  //     this.movie = data;
  //   });
  // }

}
