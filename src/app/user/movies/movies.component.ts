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
  constructor(private movieService: MovieService, private router: Router) { }

}
