import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;
  sortedMovies: any[] = []; // initialize an empty array for sorted movies
  currentSortColumn: string = '';
  currentSortOrder: boolean = true;


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
    this.router.navigate(['/admin/editMovie', id]);
  }

  sortColumn(columnName: string, sortOrder: boolean) {
    if (this.currentSortColumn === columnName) {
      // if the user clicked the same column again, toggle the sort order
      this.currentSortOrder = !this.currentSortOrder;
    } else {
      // if the user clicked a different column, reset the sort order to ascending
      this.currentSortOrder = true;
      this.currentSortColumn = columnName;
    }

    // sort the movies array based on the chosen column and sort order
    this.sortedMovies = this.movies.sort((a: any, b: any) => {
      if (a[columnName] > b[columnName]) {
        return sortOrder ? 1 : -1;
      } else if (a[columnName] < b[columnName]) {
        return sortOrder ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

}