import { Component } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {

  public seats = [
    [
      { number: 'A1', reserved: false,booked:false },
      { number: 'A2', reserved: false },
    ],
    [
      { number: 'B1', reserved: false },
      { number: 'B2', reserved: false },
    ],
  ];

  public reserveSeat(seat:any) {
    seat.reserved = true;
  }
}
