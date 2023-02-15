import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { ScreenService } from 'src/app/services/screen.service';
import { TicketService } from 'src/app/services/ticket.service';

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
  screen: any;
  classicSeats:[seat[]] = [[]];
  classicPlusSeats:[seat[]]= [[]];
  primeSeats:[seat[]]= [[]];
  movie:any;
  selectedSeats:string[]=[];
  reservedSeats:string[]=[];
  mid:string='';
  sid:string='';
  totalCost:number=0;
  ticketData:any;

  constructor(private screenService: ScreenService, private route: ActivatedRoute,private movieService:MovieService,private router:Router,private ticketService:TicketService) {

    this.sid = this.route.snapshot.queryParams['sid'];
    this.mid = this.route.snapshot.queryParams['id'];    

    this.movieService.getShow(this.sid).subscribe(data => {
      this.screen = data;

      this.screenService.scrennData(this.screen.screenNumber).subscribe(data => {
        this.seatData = data;
  
        this.initializeSeats();
  
      });
      
    });

  }

  ngOnInit(): void {

    if(sessionStorage.getItem("id") == undefined ||sessionStorage.getItem("id")==''|| sessionStorage.getItem("id")==null)
    {
      this.router.navigate(['/login']);
    }
    this.ticketService.getTicketsBySid(this.sid).subscribe(data => {
      this.ticketData=data;
      for(let d of Object(Array.from(this.ticketData))){
        for(let s of d.selectedSeats){
          this.reservedSeats.push(s);
        }
      }
      console.log(this.reservedSeats);
    });  

    let id = this.route.snapshot.queryParams['id'];
    this.movieService.selectMovie(id).subscribe(data=>{
      this.movie=data;
    });
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
      if(this.reservedSeats.includes(newSeat.id)){
        newSeat.status="reserved";
      }
      
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
      console.log(this.reservedSeats);
      
      if(this.reservedSeats.includes(newSeat.id)){
        newSeat.status="reserved";
      }
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
      if(this.reservedSeats.includes(newSeat.id)){
        newSeat.status="reserved";
      }
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
            else if(s.status==="selected"){
              s.status="seat";
              this.selectedSeats.splice(this.selectedSeats.indexOf(id), 1);
              console.log(this.selectedSeats);
              if(s.id.includes('C')){
                this.totalCost = this.totalCost-Number(this.movie.classicPrice);
              }
              if(s.id.includes('B')){
                this.totalCost = this.totalCost-Number(this.movie.classicPlusPrice);
              }
              if(s.id.includes('A')){
                this.totalCost = this.totalCost-Number(this.movie.primePrice);
              }
            }
            else{
              s.status="selected";
              this.selectedSeats.push(id);
              console.log(this.selectedSeats);
              if(s.id.includes('C')){
                this.totalCost = this.totalCost+Number(this.movie.classicPrice);
              }
              if(s.id.includes('B')){
                this.totalCost = this.totalCost+Number(this.movie.classicPlusPrice);
              }
              if(s.id.includes('A')){
                this.totalCost = this.totalCost+Number(this.movie.primePrice);
              }
            }
            console.log(this.totalCost);
            
          }
        }
        
      }
    }
  }

  book(){
    let data={
      mid:this.mid,
      sid:this.sid,
      uid:sessionStorage.getItem("id"),
      selectedSeats:this.selectedSeats,
      totalCost:this.totalCost
    }
    this.router.navigate(['/payment'],{queryParams:data});
  }
}
