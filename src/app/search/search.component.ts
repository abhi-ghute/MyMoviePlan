import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movies: any;
  searchText:string='';
  ngOnInit() {
    this.searchText = this.route.snapshot.queryParams['searchText'];
    this.movieService.showList().subscribe(data => {
      if(JSON.stringify(data).includes(this.searchText)){
        this.movies = data;
      }
      console.log(this.movies);
    });
  }
  constructor(private movieService: MovieService, private router: Router,private route:ActivatedRoute) { 
  }
}
