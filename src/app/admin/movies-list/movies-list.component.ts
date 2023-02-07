import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;


  ngOnInit() {
    this.movieService.showMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
  constructor(private movieService: MovieService, private router: Router) { }

  changeMovieStatus(status: string, id: string) {
    this.movieService.updateStatus(status, id).subscribe(data => {
      for (let movie of this.movies) {
        if (movie.id == id) {
          movie.status = data;
        }
      }
    });
  }

  editForm(id: string) {
    this.router.navigate(['/admin/editMovie',id]);
  }
}
