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
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    if (this.login.invalid) {
      alert("wrong credentials1");
      return;
    }else{
     if(this.login.value.userName=='admin'){
      this.loginService.checkAdminLogin(this.login.value).subscribe(data=>{
        if(data!=null){
          sessionStorage.setItem("id",data.userName);
          this.route.navigate(['/home']);
        }
        else{
          alert("wrong credentials2");
        }
     });
     }
     else{
      this.loginService.checklogin(this.login.value).subscribe(data=>{
        if(data!=null){
          sessionStorage.setItem("id",data.id);
          this.route.navigate(['/home']);
        }
        else{
          alert("wrong credentials3");
        }
     });
     }
    }
  }
}
