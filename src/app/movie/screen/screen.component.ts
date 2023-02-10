import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from 'src/app/services/screen.service';

interface seat{
  id:string,
  status:string
}
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  seatData: any;
  screen: string = '';
  classicSeats:[seat[]] = [[]];
  classicPlusSeats:[seat[]]= [[]];
  primeSeats:[seat[]]= [[]];

  constructor(private screenService: ScreenService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.screen = params['screen'];
    });

    this.screenService.scrennData(this.screen).subscribe(data => {
      this.seatData = data;

      this.initializeSeats();

    });

  }

  ngOnInit(): void {
  }
  toggleSeat(seat: any) {
    seat.available = !seat.available;
  }
  initializeSeats() {
    let id = 0;
    let prime= [];

    var temp1:seat[]=[];
    for (let i = 1; i <= this.seatData.classic; i++) {
      if([3,10,14,21].includes(i)){
        const newSeat = { id:'',status:'blankSeat'};
        temp1.push(newSeat);
      }
      const newSeat = { id: "C" + i,status:'seat'};
      temp1.push(newSeat);

      if(i==11){
        this.classicSeats.push(temp1);
        temp1=[];
      }
    }
    this.classicSeats.push(temp1);

    var temp1:seat[]=[];
    for (let i = 1; i <= this.seatData.classicPlus; i++) {
      if([4,14,20,30,36,52,68,1,17,46,62,78,33,49,65].includes(i)){
        const newSeat = { id:'',status:'blankSeat'};
        temp1.push(newSeat);
      }
      const newSeat = { id: "B" + i,status:'seat'};
      temp1.push(newSeat);

      if([16,32,48,64,80].includes(i)){
        this.classicPlusSeats.push(temp1);
        temp1=[];
      }
    }
    this.classicPlusSeats.push(temp1);

  var temp1:seat[]=[];
    for (let i = 1; i <= this.seatData.prime; i++) {
      if([4,20,14,30,1,17].includes(i)){
        const newSeat = { id:'',status:'blankSeat'};
        temp1.push(newSeat);
      }
      const newSeat = { id: "A" + i,status:'seat'};
      temp1.push(newSeat);

      if([16,32,48].includes(i)){
        this.primeSeats.push(temp1);
        temp1=[];
      }
    }
    this.primeSeats.push(temp1);
  }

  onSeatClick(id:string){
    if(id==''){
      return;
    }else{
      let seatTypeArray;
      
      if(id.includes('A')){
        seatTypeArray = this.primeSeats;
      }else if(id.includes('B')){
        seatTypeArray = this.classicPlusSeats;
      }else{
        seatTypeArray = this.classicSeats;
      }

      for(let seatArray of seatTypeArray)
      {
        for(let s of seatArray){
          if(s.id==id){
            if(s.status==="reserved"){
              return;
            }
            else{
              s.status="reserved";
            }
          }
        }
        
      }
    }
  }
}
