import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService){}
  
  login = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    if (this.login.invalid) {
      return;
    }else{
      this.loginService.checklogin(this.login.value);
    }
    console.log(this.login.value);
  }
}
