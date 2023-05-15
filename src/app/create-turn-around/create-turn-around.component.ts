import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-turn-around',
  templateUrl: './create-turn-around.component.html',
  styleUrls: ['./create-turn-around.component.css']
})
export class CreateTurnAroundComponent implements OnInit {

  targetTouchdownTime = new Date();
  targetArrivedTime = new Date();
  targetStepOnTime = new Date();
  targetLeftFrontDoorTime = new Date();
  targetLeftRearDoorTime = new Date();
  targetCargo1DoorTime = new Date();
  targetCargo2DoorTime = new Date();
  targetPowerAvailableTime = new Date();
  targetLastPAXoffTime = new Date();
  targetBagsoffloadedTime = new Date();
  targetFirstBagTime = new Date();
  targetLastBagTime = new Date();

  targetGateOpenTime = new Date();
  targetAircraftBoardingStartedTime = new Date();
  targetGateClosedTime = new Date();
  targetBoardingCompleteTime = new Date();
  targetDoorsClosedTime = new Date();
  targetActualPushTime = new Date();
  targetAirborneTime = new Date();

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
  airline_match = false;

  style: string;
  stand_value: string;
  gate_value: string;

  TurnAround: any;

  ArrFliId: number;
  DepFliId: number;
  ArrFli: any = [];
  DepFli: any = [];
  ArrFli_type: string;
  DepFli_type: string;
  IsMatched = false;
  PostTurnInfo: any = [];
  ArrFliByID: any = [];
  UpdateArrival: any = [];
  DepFliByID: any = [];
  UpdateDeparture: any = [];

  constructor(private router: Router, private auth: SharedService) {
    // console.log("ctor");
  }

  ngOnInit(): void {
    this.Arrival_Data();
    this.Departure_Data();
    this.GetTurnAround();
    // console.log('oninit');
  }

  Arrival_Data() {
    this.auth.ArrivalFlights().subscribe(data => {
      this.Arrival_Flights = data;
      console.log(this.Arrival_Flights);
    });
  }

  Departure_Data() {
    this.auth.DepartureFlights().subscribe(data => {
      this.Departure_Flights = data;
      console.log(this.Departure_Flights);
    });
  }

  GetTurnAround() {
    this.auth.GetTurnAround().subscribe(data => {
      this.TurnAroundData = data;
      console.log(this.TurnAroundData);
    });
  }

  onSearch() {
    console.log(this.start);
    console.log(this.end);
    console.log(this.airline);
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
    console.log(this.Arrival_FlightsByDate);
    console.log(this.Departure_FlightsByDate);
  }

  onCheck() {
    this.airline_match = true;
    this.ArrFli_type = this.ArrFli.airlines;
    this.DepFli_type = this.DepFli.airlines;
    if (this.ArrFli_type == this.DepFli_type) {
      this.IsMatched = true;
    }
  }
  onCreate() {
    this.auth.get_flightsbyid(this.ArrFliId).subscribe(data => {
      this.ArrFli = data;
      // console.log(this.ArrFli);
    });
    this.auth.get_flightsbyid(this.DepFliId).subscribe(data => {
      this.DepFli = data;
      // console.log(this.DepFli);
    });
    // var str1 = "10:20:45",
    //   str2 = "05:10:10";

    // if (str1 > str2)
    //   alert("Time 1 is later than time 2");
    // else
    //   alert("Time 2 is later than time 1");
  }

  onClose() {
    this.airline_match = false;
    this.GetTurnAround();
  }

  onMatch() {
    this.TurnAround = {
      TurnStyle: this.style,
      LinkedFlights: this.ArrFli.flight_Code + " | " + this.ArrFli.scheduled_Date.slice(0, 10) + " " + this.ArrFli.scheduled_Date.slice(11, 16) + " - " + this.DepFli.flight_Code + " | " + this.DepFli.scheduled_Date.slice(0, 10) + " " + this.DepFli.scheduled_Date.slice(11, 16),
      Airline: this.DepFli.airlines,
      Aircraft: this.DepFli.aircraft_Type,
      Stand: this.stand_value,
      Gate: this.gate_value,
      Origin: this.ArrFli.origin,
      Destination: this.DepFli.destination,
      ArrivalFlightId: this.ArrFliId,
      DepartureFlightId: this.DepFliId
    }
    // console.log(this.TurnAround);
    // this.auth.CreateTurnAround(this.TurnAround).subscribe({
    //   next: (response) => {
        // alert(response.message);
        // this.PostTurnInfo = {
        //   TurnAroundType: this.TurnAround.TurnStyle,
        //   StartDateTime: this.TurnAround.LinkedFlights.slice(5, 21),
        //   FinishDateTime: this.TurnAround.LinkedFlights.slice(29, 45),
        //   Aircraft: this.TurnAround.Aircraft,
        //   DepartureGate: this.TurnAround.Gate,
        //   Stand: this.TurnAround.Stand,
        // }
        // this.auth.PostTurnAroundDeskInfo(this.PostTurnInfo).subscribe({
        //   next: (response) => {
        //     // alert(response.message);
        //   }
        // })
        // this.auth.get_flightsbyid(this.TurnAround.ArrivalFlightId).subscribe({
        //   next: (response) => {
        //     this.ArrFliByID = response;
        //     // console.log(this.ArrFliByID);
        //     this.targetTouchdownTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetArrivedTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetArrivedTime.setMinutes(this.targetTouchdownTime.getMinutes() + 5);
        //     this.targetStepOnTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetStepOnTime.setMinutes(this.targetArrivedTime.getMinutes() + 5);
        //     this.targetLeftFrontDoorTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetLeftFrontDoorTime.setMinutes(this.targetStepOnTime.getMinutes() + 5);
        //     this.targetLeftRearDoorTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetLeftRearDoorTime.setMinutes(this.targetLeftFrontDoorTime.getMinutes() + 5);
        //     this.targetCargo1DoorTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetCargo1DoorTime.setMinutes(this.targetLeftRearDoorTime.getMinutes() + 5);
        //     this.targetCargo2DoorTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetCargo2DoorTime.setMinutes(this.targetCargo1DoorTime.getMinutes() + 5);
        //     this.targetPowerAvailableTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetPowerAvailableTime.setMinutes(this.targetCargo2DoorTime.getMinutes() + 5);
        //     this.targetLastPAXoffTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetLastPAXoffTime.setMinutes(this.targetPowerAvailableTime.getMinutes() + 5);
        //     this.targetBagsoffloadedTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetBagsoffloadedTime.setMinutes(this.targetLastPAXoffTime.getMinutes() + 5);
        //     this.targetFirstBagTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetFirstBagTime.setMinutes(this.targetBagsoffloadedTime.getMinutes() + 5);
        //     this.targetLastBagTime = new Date(this.ArrFliByID.scheduled_Date);
        //     this.targetLastBagTime.setMinutes(this.targetFirstBagTime.getMinutes() + 5);

        //     this.UpdateArrival = {
        //       // turnAroundId: this.TurnAroundData.turnAroundId,
        //       origin: this.ArrFliByID.origin,
        //       flightNo: this.ArrFliByID.flight_Code,
        //       scheduled: this.ArrFliByID.scheduled_Date,
        //       estimated: this.ArrFliByID.scheduled_Date,
        //       targetTouchdown: this.targetTouchdownTime.toString().slice(16, 21),
        //       targetArrived: this.targetArrivedTime.toString().slice(16, 21),
        //       targetStepOn: this.targetStepOnTime.toString().slice(16, 21),
        //       targetLeftFrontDoor: this.targetLeftFrontDoorTime.toString().slice(16, 21),
        //       targetLeftRearDoor: this.targetLeftRearDoorTime.toString().slice(16, 21),
        //       targetCargo1Door: this.targetCargo1DoorTime.toString().slice(16, 21),
        //       targetCargo2Door: this.targetCargo2DoorTime.toString().slice(16, 21),
        //       targetPowerAvailable: this.targetPowerAvailableTime.toString().slice(16, 21),
        //       targetLastPAXoff: this.targetLastPAXoffTime.toString().slice(16, 21),
        //       targetBagsoffloaded: this.targetBagsoffloadedTime.toString().slice(16, 21),
        //       targetFirstBag: this.targetFirstBagTime.toString().slice(16, 21),
        //       targetLastBag: this.targetLastBagTime.toString().slice(16, 21),
        //     }
        //     this.auth.PostArrivalTurnAroundDesk(this.UpdateArrival).subscribe({
        //       next: (response) => {
        //         // alert(response.message);
        //       }
        //     })

        //   }
        // })

        // this.auth.get_flightsbyid(this.TurnAround.DepartureFlightId).subscribe({
        //   next: (response) => {
        //     this.DepFliByID = response;

        //     this.targetGateOpenTime = new Date(this.DepFliByID.scheduled_Date);
        //     this.targetAircraftBoardingStartedTime = new Date(this.DepFliByID.scheduled_Date);
        //     this.targetAircraftBoardingStartedTime.setMinutes(this.targetGateOpenTime.getMinutes() + 5);
        //     this.targetGateClosedTime = new Date(this.DepFliByID.scheduled_Date);
        //     this.targetGateClosedTime.setMinutes(this.targetAircraftBoardingStartedTime.getMinutes() + 5);
        //     this.targetBoardingCompleteTime = new Date(this.DepFliByID.scheduled_Date);
        //     this.targetBoardingCompleteTime.setMinutes(this.targetGateClosedTime.getMinutes() + 5);
        //     this.targetDoorsClosedTime = new Date(this.DepFliByID.scheduled_Date);
        //     this.targetDoorsClosedTime.setMinutes(this.targetBoardingCompleteTime.getMinutes() + 5);
        //     this.targetActualPushTime = new Date(this.DepFliByID.scheduled_Date);
        //     this.targetActualPushTime.setMinutes(this.targetDoorsClosedTime.getMinutes() + 5);
        //     this.targetAirborneTime = new Date(this.DepFliByID.scheduled_Date);
        //     this.targetAirborneTime.setMinutes(this.targetActualPushTime.getMinutes() + 5);

        //     this.UpdateDeparture = {
        //       // turnAroundId: this.TurnAroundData.turnAroundId,
        //       destination: this.DepFliByID.destination,
        //       flightNo: this.DepFliByID.flight_Code,
        //       scheduled: this.DepFliByID.scheduled_Date,
        //       estimated: this.DepFliByID.scheduled_Date,
        //       targetGateOpen: this.targetGateOpenTime.toString().slice(16, 21),
        //       targetAircraftBoardingStarted: this.targetAircraftBoardingStartedTime.toString().slice(16, 21),
        //       targetGateClosed: this.targetGateClosedTime.toString().slice(16, 21),
        //       targetBoardingComplete: this.targetBoardingCompleteTime.toString().slice(16, 21),
        //       targetDoorsClosed: this.targetDoorsClosedTime.toString().slice(16, 21),
        //       targetActualPush: this.targetActualPushTime.toString().slice(16, 21),
        //       targetAirborne: this.targetAirborneTime.toString().slice(16, 21),
        //     }
        //     this.auth.PostDepartureTurnAroundDesk(this.UpdateDeparture).subscribe({
        //       next: (response) => {
        //         // alert(response.message);
        //       }
        //     })
        //   }
        // })

        // this.auth.PostPassengersTurnAroundDesk(0).subscribe({
        //   next: (response) => {
        //     // alert(response.message);
        //   }
        // })
        // this.auth.PostDelayTurnAroundDesk(0).subscribe({
        //   next: (response) => {
        //     // alert(response.message);
        //   }
        // })

    //   },
    //   // error: (err) => {
    //   //   alert(err?.error.message)
    //   // }
    // })


  }

}
