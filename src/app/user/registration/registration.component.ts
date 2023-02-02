import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  username: string='';
  email: string='';
  password: string='';

  onSubmit() {
    console.log(this.username, this.email, this.password);
    // Add code here to send the form data to a server for processing
  }
}
