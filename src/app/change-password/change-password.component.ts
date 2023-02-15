import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("id") == undefined ||sessionStorage.getItem("id")==''|| sessionStorage.getItem("id")==null)
    {
      this.router.navigate(['/login']);
    }
  }

  changePassword = new FormGroup({
    password: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    let data= Object(this.changePassword.value);
    if (this.changePassword.invalid) {
      alert("wrong credentials1");
      return;
    }else if(data.cpassword !=data.newPassword){
      alert("new password not matching with confirm password");
      return;
    } else {
      let id = sessionStorage.getItem('id');
      if(id!=null){
       
        this.loginService.changePassword(id,data.password,data.cpassword).subscribe(data => {
          alert(data);
          this.changePassword.reset();
        });
      }
    }
  }
}
