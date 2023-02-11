import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent {
  movies: any;
 
  ngOnInit() {
    this.movieService.showEnableMovies().subscribe(data => {
      this.movies = data;
    });
  }
  constructor(private movieService: MovieService, private router: Router,private elementRef: ElementRef) { }

  addShow(id: string) {
    alert();
    let date = this.elementRef.nativeElement.querySelector('[name="date'+id+'"]').value;
    let time = this.elementRef.nativeElement.querySelector('[name="time'+id+'"]').value;
    let screen = this.elementRef.nativeElement.querySelector('[name="screen'+id+'"]').value
    if(date ==='' || time===''){
      alert("Selct show date and time");
      return;
    }else{
      let show={
        id:id,
        date:date,
        time:time,
        screenNumber:screen
      }  
      this.movieService.addShow(show).subscribe(data => {
        console.log(data); 
      });
    }

  }
}
