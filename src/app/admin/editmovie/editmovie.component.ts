import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent {

  movieData:any;
  currentDate:string='';
  id:string='';
  constructor(private movieService:MovieService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.movieService.showMovies().subscribe(data => {
      for(let d of data){
        if(d.id==this.id){
          this.movieData = d;
          console.log(this.movieData.releaseDate);
        }
      }

      for(let i=1;i<this.movieData.cast.length;i++){
        this.addCast();
      } 
      for(let i=1;i<this.movieData.crew.length;i++){
        this.addCrew();
      } 
      this.currentDate= this.movieData.releaseDate;
      this.movie.patchValue(this.movieData);
    });
  }

  movie = new FormGroup({
    name:new FormControl('',[Validators.required]),
    classicPrice:new FormControl('',[Validators.required]),
    classicPlusPrice:new FormControl('',[Validators.required]),
    primePrice:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    language:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    newimage:new FormControl('',[Validators.required]),
    releaseDate:new FormControl('',[Validators.required]),
    visuals:new FormControl('',[Validators.required]),
    cast: new FormArray([new FormGroup({
      name:new FormControl('',[Validators.required]),
      movieName:new FormControl('',[Validators.required]),
      newimage:new FormControl('',[Validators.required]),
      imageData:new FormControl('',[Validators.required])
    })]),
    crew:new FormArray([new FormGroup({
      name:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required]),
      newimage:new FormControl('',[Validators.required]),
      imageData:new FormControl('',[Validators.required])
    })]),
    status:new FormControl('',[Validators.required]),
  });

  addCast(){
    (this.movie.get('cast') as FormArray).push(new FormGroup({
      name:new FormControl('',[Validators.required]),
      movieName:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
      imageData:new FormControl('',[Validators.required])
    }));
  };
  get casts(): FormArray {
    return this.movie.get('cast') as FormArray;
  }
  removeCast(index: number) {
    this.casts.removeAt(index);
  }
  uploadCastImage(indexVal:number,event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      const imageData = reader.result as string;
      const imageDataUrl = imageData.toString();
      console.log(imageDataUrl);
      
      this.movie.get('cast')?.get([indexVal])?.get('imageData')?.setValue(imageDataUrl);
    };
    
    reader.readAsDataURL(file);
  }

  addCrew(){
    (this.movie.get('crew') as FormArray).push(new FormGroup({
      name:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
      imageData:new FormControl('',[Validators.required])
    }));
  };

  get crews(): FormArray {
    return this.movie.get('crew') as FormArray;
  }
  removeCrew(index: number) {
    this.crews.removeAt(index);
  }
  uploadCrewImage(indexVal:number,event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      const imageData = reader.result as string;
      const imageDataUrl = imageData.toString();
      console.log(imageDataUrl);
      
      this.movie.get('crew')?.get([indexVal])?.get('imageData')?.setValue(imageDataUrl);
    };
    
    reader.readAsDataURL(file);
  }
  uploadMovieImage(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      const imageData = reader.result as string;
      const imageDataUrl = imageData.toString();
      console.log(imageDataUrl);
      
      this.movie.get('newimage')?.setValue(imageDataUrl);
    };
    
    reader.readAsDataURL(file);
  }
  onSubmit() {
    if (this.movie.invalid) {
      return;
    }else{
      this.movieService.updateMovie(this.movie.value);
    }
    console.log(this.movie.value); 
  }
   
}
