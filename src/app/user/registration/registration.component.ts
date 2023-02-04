import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RegisterUserService } from 'src/app/services/register-user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private registerService:RegisterUserService){}
  
  registration = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    mobileNo: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    city: new FormControl('',[Validators.required])
  });

  onSubmit() {
    if (this.registration.invalid) {
      return;
    }else{
      this.registerService.register(this.registration.value);
    }
    console.log(this.registration.value);
  }
}
