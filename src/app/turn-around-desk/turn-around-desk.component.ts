import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-turn-around-desk',
  templateUrl: './turn-around-desk.component.html',
  styleUrls: ['./turn-around-desk.component.css']
})
export class TurnAroundDeskComponent implements OnInit  {


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

  form : FormGroup;
  form1 : FormGroup; 
  // TurnAround_Details: any;
  Aircraft: any = ['A319', 'AT70', 'ATR72', 'CRJ9', 'B752', 'H24', 'B734', 'A318', 'HA4T', '32A', 'E170', 'B739', 'B735', 'A32N', 'A21N', '32N'];
  DepartureWave: any = ['1st', '2nd', '3rd'];
  Stands: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  Gates: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // TurnAroundData: any = [];
  ArrFliByID: any = [];
  DepFliByID: any = [];
  passengers : any = [];
  delay : any =[];

  PostTurnInfo: any = 
  {
    // TurnAroundId: 0,
    turnAroundType: '',
    startDateTime: '',
    finishDateTime: '',
    aircraft: '',
    departureGate: '',
    stand: '',
    isTripCancelled: '',
    registration: '',
    departureWave: '',
    finalWave: '',
  }
  UpdateArrival: any = 
  {
    // turnAroundId: 0,
    origin: '',
    flightNo: '',
    status: '',
    handler: '',
    scheduled: new Date(),
    estimated: new Date(),
    touchdown: new Date(),
    arrived: new Date(),
    targetTouchdown: '',
    targetArrived: '',
    targetStepOn: '',
    targetLeftFrontDoor: '',
    targetLeftRearDoor: '',
    targetCargo1Door: '',
    targetCargo2Door: '',
    targetPowerAvailable: '',
    targetLastPAXoff: '',
    targetBagsoffloaded: '',
    targetFirstBag: '',
    targetLastBag: '',
    actualTouchdown: '',
    actualArrived: '',
    actualStepOn: '',
    actualLeftFrontDoor: '',
    actualLeftRearDoor: '',
    actualCargo1Door: '',
    actualCargo2Door: '',
    actualPowerAvailable: '',
    actualLastPAXoff: '',
    actualBagsoffloaded: '',
    actualFirstBag: '',
    actualLastBag: '',
  }
  UpdateDeparture: any = {
    // turnAroundId: 0,
    destination: '',
    flightNo: '',
    status: '',
    dispatcher: '',
    scheduled: new Date(),
    estimated: new Date(),
    actual: new Date(),
    airborne: new Date(),
    targetGateOpen: '',
    targetAircraftBoardingStarted: '',
    targetGateClosed: '',
    targetBoardingComplete: '',
    targetDoorsClosed: '',
    targetActualPush: '',
    targetAirborne: '',
    actualGateOpen: '',
    actualAircraftBoardingStarted: '',
    actualGateClosed: '',
    actualBoardingComplete: '',
    actualDoorsClosed: '',
    actualActualPush: '',
    actualAirborne: '',
  }


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private auth: SharedService,) { }

  ngOnInit(): void {
    // this.get();
    this.form = this.fb.group(
      {
        // TurnAroundId: [],
        ArrivalAdults: [0],
        ArrivalInfants: [0],
        ArrivalHoldBags: [0],
        ArrivalCargoinkgs: [0],
        ArrivalSpecials: [0],
        ArrivalSpecialOthers: [0],
        ArrivalWCHRomeo: [0],
        ArrivalWCHSierra: [0],
        ArrivalWCHCharlie: [0],
        ArrivalUNMINS: [0],
        ArrivalWheelchairs: [0],
        ArrivalLuggageBelt: [0],
        DepartureAdults: [0],
        DepartureInfants: [0],
        DepartureBagsonBooking: [0],
        DeparturePaxonBooking: [0],
        DepartureCheckedBags: [0],
        DepartureGateBags: [0],
        DepartureRushBags: [0],
        DepartureCargoinkgs: [0],
        DepartureSpecials: [0],
        DepartureSpecialOthers: [0],
        DepartureWCHRomeo: [0],
        DepartureWCHSierra: [0],
        DepartureWCHCharlie: [0],
        DepartureUNMINS: [0],
        DepartureDeportee: [0],
        DepartureEMA: [0],
      },
    );
    this.form1 = this.fb.group({
      // TurnAroundId : [],
      DelayedDueTo : [''],
      DelayTime : [''],
      DelayeCode : [''],
      ReportedBy : [''],
      Description : [''],
      Notes : ['']
    });
  }

  onSubmitDelay(){
    console.log(this.form1.value);
    this.auth.UpdateDelayTurnAroundDesk(this.PostTurnInfo.turnAroundId, this.form1.value).subscribe({
      next: (response) => {
        alert(response.message);
        this.auth.GetDelayTurnAroundDeskById(this.PostTurnInfo.turnAroundId).subscribe({
          next: (response) => {
            this.delay = response;
            console.log(this.delay);
          }
        })
      }
    })
    
  }

  onSubmitPassengers() {
    console.log(this.form.value);
    this.auth.UpdatePassengersTurnAroundDesk(this.PostTurnInfo.turnAroundId, this.form.value).subscribe({
      next: (response) => {
        alert(response.message);
        this.auth.GetPassengersTurnAroundDeskById(this.PostTurnInfo.turnAroundId).subscribe({
          next: (response) => {
            this.passengers = response;
            console.log(this.passengers);
          }
        })
      }
    })
   
  }

  onSubmit() {
    this.auth.UpdateTurnAroundDeskInfo(this.PostTurnInfo.turnAroundId, this.PostTurnInfo).subscribe({
      next: (response) => {
        alert(response.message);
        this.auth.GetTurnInfoById(this.PostTurnInfo.turnAroundId).subscribe({
          next: (response) => {
            this.PostTurnInfo = response;
            // console.log(this.PostTurnInfo);
          }
        })
      }
    })
    
  }

  get() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.auth.GetTurnInfoById(id).subscribe({
            next: (response) => {
              this.PostTurnInfo = response;
              console.log(this.PostTurnInfo);
              // this.post();
            }
          })
          this.auth.GetArrivalTurnAroundDeskById(id).subscribe({
            next: (response) => {
              this.UpdateArrival = response;
              console.log(this.UpdateArrival);
              // this.post();
            }
          })
          this.auth.GetDepartureTurnAroundDeskById(id).subscribe({
            next: (response) => {
              this.UpdateDeparture = response;
              console.log(this.UpdateDeparture);
              // this.post();
            }
          })
          this.auth.GetPassengersTurnAroundDeskById(id).subscribe({
            next: (response) => {
              this.passengers = response;
              console.log(this.passengers);
              // this.post();
            }
          })
          this.auth.GetDelayTurnAroundDeskById(id).subscribe({
            next: (response) => {
              this.delay = response;
              console.log(this.delay);
              // this.post();
            }
          })
        }
      }
    })


  }
  post() {
    // this.PostTurnInfo = {
    //   TurnAroundId: this.TurnAroundData.turnAroundId,
    //   TurnAroundType: this.TurnAroundData.turnStyle,
    //   StartDateTime: this.TurnAroundData.linkedFlights.slice(5, 21),
    //   FinishDateTime: this.TurnAroundData.linkedFlights.slice(29, 45),
    //   Aircraft: this.TurnAroundData.aircraft,
    //   DepartureGate: this.TurnAroundData.gate,
    //   Stand: this.TurnAroundData.stand,
    // }
    // console.log(this.PostTurnInfo);

    // this.targetTouchdownTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetArrivedTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetArrivedTime.setMinutes(this.targetTouchdownTime.getMinutes() + 5);
    // this.targetStepOnTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetStepOnTime.setMinutes(this.targetArrivedTime.getMinutes() + 5);
    // this.targetLeftFrontDoorTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetLeftFrontDoorTime.setMinutes(this.targetStepOnTime.getMinutes() + 5);
    // this.targetLeftRearDoorTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetLeftRearDoorTime.setMinutes(this.targetLeftFrontDoorTime.getMinutes() + 5);
    // this.targetCargo1DoorTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetCargo1DoorTime.setMinutes(this.targetLeftRearDoorTime.getMinutes() + 5);
    // this.targetCargo2DoorTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetCargo2DoorTime.setMinutes(this.targetCargo1DoorTime.getMinutes() + 5);
    // this.targetPowerAvailableTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetPowerAvailableTime.setMinutes(this.targetCargo2DoorTime.getMinutes() + 5);
    // this.targetLastPAXoffTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetLastPAXoffTime.setMinutes(this.targetPowerAvailableTime.getMinutes() + 5);
    // this.targetBagsoffloadedTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetBagsoffloadedTime.setMinutes(this.targetLastPAXoffTime.getMinutes() + 5);
    // this.targetFirstBagTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetFirstBagTime.setMinutes(this.targetBagsoffloadedTime.getMinutes() + 5);
    // this.targetLastBagTime = new Date(this.ArrFliByID.scheduled_Date);
    // this.targetLastBagTime.setMinutes(this.targetFirstBagTime.getMinutes() + 5);

    // this.UpdateArrival = {
    //   turnAroundId: this.TurnAroundData.turnAroundId,
    //   origin: this.ArrFliByID.origin,
    //   flightNo: this.ArrFliByID.flight_Code,
    //   scheduled: this.ArrFliByID.scheduled_Date,
    //   estimated: this.ArrFliByID.scheduled_Date,
    //   targetTouchdown: this.targetTouchdownTime.toString().slice(16, 21),
    //   targetArrived: this.targetArrivedTime.toString().slice(16, 21),
    //   targetStepOn: this.targetStepOnTime.toString().slice(16, 21),
    //   targetLeftFrontDoor: this.targetLeftFrontDoorTime.toString().slice(16, 21),
    //   targetLeftRearDoor: this.targetLeftRearDoorTime.toString().slice(16, 21),
    //   targetCargo1Door: this.targetCargo1DoorTime.toString().slice(16, 21),
    //   targetCargo2Door: this.targetCargo2DoorTime.toString().slice(16, 21),
    //   targetPowerAvailable: this.targetPowerAvailableTime.toString().slice(16, 21),
    //   targetLastPAXoff: this.targetLastPAXoffTime.toString().slice(16, 21),
    //   targetBagsoffloaded: this.targetBagsoffloadedTime.toString().slice(16, 21),
    //   targetFirstBag: this.targetFirstBagTime.toString().slice(16, 21),
    //   targetLastBag: this.targetLastBagTime.toString().slice(16, 21),
    // }
    // console.log(this.UpdateArrival);

    // this.targetGateOpenTime = new Date(this.DepFliByID.scheduled_Date);
    // this.targetAircraftBoardingStartedTime = new Date(this.DepFliByID.scheduled_Date);
    // this.targetAircraftBoardingStartedTime.setMinutes(this.targetGateOpenTime.getMinutes() + 5);
    // this.targetGateClosedTime = new Date(this.DepFliByID.scheduled_Date);
    // this.targetGateClosedTime.setMinutes(this.targetAircraftBoardingStartedTime.getMinutes() + 5);
    // this.targetBoardingCompleteTime = new Date(this.DepFliByID.scheduled_Date);
    // this.targetBoardingCompleteTime.setMinutes(this.targetGateClosedTime.getMinutes() + 5);
    // this.targetDoorsClosedTime = new Date(this.DepFliByID.scheduled_Date);
    // this.targetDoorsClosedTime.setMinutes(this.targetBoardingCompleteTime.getMinutes() + 5);
    // this.targetActualPushTime = new Date(this.DepFliByID.scheduled_Date);
    // this.targetActualPushTime.setMinutes(this.targetDoorsClosedTime.getMinutes() + 5);
    // this.targetAirborneTime = new Date(this.DepFliByID.scheduled_Date);
    // this.targetAirborneTime.setMinutes(this.targetActualPushTime.getMinutes() + 5);

    // this.UpdateDeparture = {
    //   turnAroundId: this.TurnAroundData.turnAroundId,
    //   destination: this.DepFliByID.destination,
    //   flightNo: this.DepFliByID.flight_Code,
    //   scheduled: this.DepFliByID.scheduled_Date,
    //   estimated: this.DepFliByID.scheduled_Date,
    //   targetGateOpen: this.targetGateOpenTime.toString().slice(16, 21),
    //   targetAircraftBoardingStarted: this.targetAircraftBoardingStartedTime.toString().slice(16, 21),
    //   targetGateClosed: this.targetGateClosedTime.toString().slice(16, 21),
    //   targetBoardingComplete: this.targetBoardingCompleteTime.toString().slice(16, 21),
    //   targetDoorsClosed: this.targetDoorsClosedTime.toString().slice(16, 21),
    //   targetActualPush: this.targetActualPushTime.toString().slice(16, 21),
    //   targetAirborne: this.targetAirborneTime.toString().slice(16, 21),
    // }

  }

  onArrivalSubmit() {
    console.log(this.UpdateArrival);

    this.auth.UpdateArrivalTurnAroundDesk(this.PostTurnInfo.turnAroundId, this.UpdateArrival).subscribe({
      next: (response) => {
        console.log(response);
        this.auth.GetArrivalTurnAroundDeskById(this.PostTurnInfo.turnAroundId).subscribe({
          next: (response) => {
            this.UpdateArrival = response;
            console.log(this.UpdateArrival);
          }
        })
      }
    })
    
  }

  onSubmitDeparture() {
    console.log(this.UpdateDeparture);
    this.auth.UpdateDepartureTurnAroundDesk(this.PostTurnInfo.turnAroundId, this.UpdateDeparture).subscribe({
      next: (response) => {
        console.log(response);
        this.auth.GetDepartureTurnAroundDeskById(this.PostTurnInfo.turnAroundId).subscribe({
          next: (response) => {
            this.UpdateDeparture = response;
            console.log(this.UpdateArrival);
          }
        })
      }
    })
    
  }

}
