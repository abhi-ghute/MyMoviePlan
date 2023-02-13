import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrls: ['./show-movie-details.component.css']
})
export class ShowMovieDetailsComponent implements OnInit{
  id: string = '';
  movie:any;
  show:any;
  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
      this.movieService.selectMovie(this.id).subscribe(data => {
        this.movie = data;
        console.log(this.movie);
      });
      this.movieService.getShowDetails(this.id).subscribe(data => {
        this.show = data;
        console.log(this.show);
      });
  }
}
