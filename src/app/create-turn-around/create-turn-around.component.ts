import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-turn-around',
  templateUrl: './create-turn-around.component.html',
  styleUrls: ['./create-turn-around.component.css']
})
export class CreateTurnAroundComponent implements OnInit {

  Arrival_Flights: any = [];
  Departure_Flights: any = [];
  Arrival_FlightsByDate: any = [];
  Departure_FlightsByDate: any = [];
  TurnAroundData: any = [];
  Airlines: any = ['easyJet', 'Air Malta', 'Volotea', 'Stobart Aviation/Flybe', 'Loganair', 'Ryanair', 'Blue Islands', 'Eurowings', 'Aurigny', 'Brussels Airlines'];
  Stands: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  Gates: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  start: string;
  end: string;
  airline: string;
  search = false;
  Arr_Flight: string = '';
  Dep_Flight: string = '';
  airline_match = false;

  style: string;
  stand_value: string;
  gate_value: string;

  TurnAround: any;

  constructor(private router: Router, private auth: SharedService) {
  }

  ngOnInit(): void {
    this.Arrival_Data();
    this.Departure_Data();
    this.GetTurnAround();
  }

  Arrival_Data(): any {
    this.auth.ArrivalFlights().subscribe(data => {
      this.Arrival_Flights = data;
      // console.log(this.Arrival_Flights);
    });
  }

  Departure_Data(): any {
    this.auth.DepartureFlights().subscribe(data => {
      this.Departure_Flights = data;
      // console.log(this.Departure_Flights);
    });
  }

  GetTurnAround() {
    this.auth.GetTurnAround().subscribe(data => {
      this.TurnAroundData = data;
      // console.log(this.TurnAroundData);
    });
  }

  onChange(e) {
    this.style = e.target.value;
  }

  onSearch() {
    // console.log(this.start);
    // console.log(this.end);
    // console.log(this.airline);
    this.search = true;    
    if (this.airline == undefined || this.start == undefined || this.end == undefined) {
      return alert("Details required");
    }
    this.auth.ArrivalFlightsByDateRange(this.start, this.end).subscribe(data => {
      this.Arrival_FlightsByDate = data;
    });
    this.auth.DepartureFlightsByDateRange(this.start, this.end).subscribe(data => {
      this.Departure_FlightsByDate = data;
    });
    // console.log(this.Arrival_FlightsByDate);
    // console.log(this.Departure_FlightsByDate);
  }

  onCreate() {
    if (this.Arr_Flight.split("|").slice(-2)[0].slice(1) != this.Dep_Flight.split("|").slice(-2)[0].slice(1)) { }
    else { this.airline_match = true; }
  }

  onClose() {
    this.airline_match = false;
    this.GetTurnAround();
  }
  onMatch() {
    this.TurnAround = {
      TurnStyle: this.style,
      LinkedFlights: this.Arr_Flight.slice(0, 15) + " - " + this.Dep_Flight.slice(0, 15),
      Airline: this.Arr_Flight.split("|").slice(-2)[0].slice(1),
      Aircraft: 'FS345',
      Stand: this.stand_value,
      Gate: this.gate_value,
      Origin: this.Arr_Flight.split(" ").slice(-1)[0],
      Destination: this.Arr_Flight.split(" ").slice(-1)[0],
    }
    // console.log(this.TurnAround);
    this.auth.CreateTurnAround(this.TurnAround).subscribe({
      next: (res) => {
        alert(res.message);
      }
    })
  }

}
