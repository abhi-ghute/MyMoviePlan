import { Component } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {

  
  seats = [
    { available: true },
    { available: true },
    { available: true },
    // Add additional seats as needed
  ];

  toggleSeat(seat:any) {
    seat.available = !seat.available;
  }
}
