import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private loginService:LoginService,private route:Router){}

  ngOnInit(): void {
  }
  
  login = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    if (this.login.invalid) {
      alert("wrong credentials");
      return;
    }else{
     this.loginService.checklogin(this.login.value).subscribe(data=>{
        if(data!=null){
          sessionStorage.setItem("id",data.id);
          this.route.navigate(['/home']);
        }
        else{
          alert("wrong credentials");
        }
     });
    }
  }
}
