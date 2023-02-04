import { Component, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  constructor(private movieService:MovieService){}
  
  movie = new FormGroup({
    cast: new FormArray([new FormGroup({
      name:new FormControl('',[Validators.required]),
      movieName:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
      imageData:new FormControl('',[Validators.required])
    })])
  });

  addCast(){
    (this.movie.get('cast') as FormArray).push(new FormGroup({
      name:new FormControl('',[Validators.required]),
      movieName:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required])
    }));
  };
  get casts(): FormArray {
    return this.movie.get('cast') as FormArray;
  }
  removeCast(index: number) {
    this.casts.removeAt(index);
  }
  
  uploadImage(indexVal:number,event:any) {
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

  onSubmit() {
    if (this.movie.invalid) {
      return;
    }else{
      this.movieService.addMovie(this.movie.value);
    }
    console.log(this.movie.value);
    //console.log(this.movie.value.cast?.image?.toString);
  }
}
