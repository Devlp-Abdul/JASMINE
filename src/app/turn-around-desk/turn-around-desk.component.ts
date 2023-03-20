import { Component } from '@angular/core';

@Component({
  selector: 'app-turn-around-desk',
  templateUrl: './turn-around-desk.component.html',
  styleUrls: ['./turn-around-desk.component.css']
})
export class TurnAroundDeskComponent {

  isArrival = true;
  isDeparture = false;

  onArrival(){
this.isArrival = true;
this.isDeparture = false;
  }
  onDeparture(){
this.isDeparture = true;
this.isArrival =false;
  }

}
