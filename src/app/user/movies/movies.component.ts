import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: any;
  upcommingMovies:any;

  discounts = [
    {
      amount: '10% off',
      image: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618550698601/inox-offers.jpg'
    },
    {
      amount: '20% off',
      image: 'https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/4596-NoMoreQ.jpg'
    },
    {
      amount: '30% off',
      image: 'https://example.com/discount3.png'
    }
  ];

  ngOnInit() {
    this.movieService.showList().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
    this.movieService.upcommingMovies().subscribe(data => {
      this.upcommingMovies = data;
      console.log(this.upcommingMovies);
    });
  }
  constructor(private movieService: MovieService, private router: Router) { 
  }

}
