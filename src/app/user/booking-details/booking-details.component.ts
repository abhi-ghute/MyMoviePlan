import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit{
  ticketData:any;
  movie:any;
  show:any;

  constructor(private route:ActivatedRoute,private router:Router,private movieService:MovieService){
    this.ticketData = this.route.snapshot.queryParams;
  }

  ngOnInit(): void {
    this.movieService.selectMovie(this.ticketData.mid).subscribe(data => {
      this.movie=data;
      console.log(this.movie);
      
    });
    this.movieService.getShow(this.ticketData.sid).subscribe(data => {
      this.show=data;
      console.log(this.show);
      
    });
  }
}
