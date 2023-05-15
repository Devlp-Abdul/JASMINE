import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CreateTurnAroundComponent } from './create-turn-around.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
xdescribe('CreateTurnAroundComponent', () => {
  let component: CreateTurnAroundComponent;
  let fixture: ComponentFixture<CreateTurnAroundComponent>;
  let authService: SharedService;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [CreateTurnAroundComponent],
      providers: [
        SharedService,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateTurnAroundComponent);
    authService = TestBed.inject(SharedService);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call onMatch', () => {
  //   // component.onMatch();  
  //   component.ArrFli.flight_Code = 'thisistheTurnStyleofmockTurnAround';
  //   component.ArrFli.scheduled_Date = 'thisistheTurnStyleofmockTurnAround';
  //   component.DepFli.flight_Code = 'thisistheTurnStyleofmockTurnAround';
  //   component.DepFli.scheduled_Date = 'thisistheTurnStyleofmockTurnAround';
  //   component.TurnAround = {
  //     TurnStyle : 'thisistheTurnStyleofmockTurnAround',
  //     LinkedFlights: 'thisistheTurnStyleofmockTurnAround',
  //     Airline: 'thisistheTurnStyleofmockTurnAround',
  //     Aircraft: 'thisistheTurnStyleofmockTurnAround',
  //     Stand: 'thisistheTurnStyleofmockTurnAround',
  //     Gate: 'thisistheTurnStyleofmockTurnAround',
  //     Origin: 'thisistheTurnStyleofmockTurnAround',
  //     Destination: 'thisistheTurnStyleofmockTurnAround',
  //     ArrivalFlightId: 'thisistheTurnStyleofmockTurnAround',
  //     DepartureFlightId: 'thisistheTurnStyleofmockTurnAround'
  //   };
  //   // const service = fixture.debugElement.injector.get(SharedService);
  //   // service.CreateTurnAround(component.TurnAround).subscribe({
  //   //   next : (res) => {
  //   //     component.PostTurnInfo ={
  //   //       TurnAroundType: component.TurnAround.TurnStyle,
  //   //       StartDateTime: component.TurnAround.LinkedFlights,
  //   //       FinishDateTime: component.TurnAround.LinkedFlights,
  //   //       Aircraft: component.TurnAround.Aircraft,
  //   //       DepartureGate: component.TurnAround.Gate,
  //   //       Stand: component.TurnAround.Stand,
  //   //     }
  //   //   }
  //   // })
  // });

  // // it('should call onMatch', () => {
  // //   const service = fixture.debugElement.injector.get(SharedService);
  // //   spyOn(service, 'PostPassengersTurnAroundDesk').and.returnValue(of([]));
  // //   component.onMatch();
  // //   // expect(component.ArrFliByID).toEqual([]);
  // //   // component.onMatch();
  // //   // const service = fixture.debugElement.injector.get(SharedService);
  // //   // service.CreateTurnAround({}).subscribe({
  // //   //   next : (res) => {

  // //   //   }
  // //   // })
  // // });

  // it('should call onCreate', () => {
  //   const service = fixture.debugElement.injector.get(SharedService);
  //   spyOn(service, 'get_flightsbyid').and.returnValue(of([]));
  //   // component.onCreate();
  //   expect(component.ArrFli).toEqual([]);
  //   expect(component.DepFli).toEqual([]);
  // });

  // it('should call onCheck', () => {
  //   // component.onCheck();
  //   expect(component.airline_match).toBeTrue();
  // });

  // it('should call onSearch DepartureFlightsByDateRange', () => {
  //   const service = fixture.debugElement.injector.get(SharedService);
  //   spyOn(service, 'DepartureFlightsByDateRange').and.returnValue(of([]));
  //   component.airline = 'easyjet';
  //   component.start = new Date().toString();
  //   component.end = new Date().toString();
  //   // component.onSearch();
  //   expect(component.Departure_FlightsByDate).toEqual([]);
  // });

  // it('should call onSearch ArrivalFlightsByDateRange', () => {
  //   const service = fixture.debugElement.injector.get(SharedService);
  //   spyOn(service, 'ArrivalFlightsByDateRange').and.returnValue(of([]));
  //   component.airline = 'easyjet';
  //   component.start = new Date().toString();
  //   component.end = new Date().toString();
  //   // component.onSearch();
  //   expect(component.Arrival_FlightsByDate).toEqual([]);
  // });

  // it('should call onSearch If statement', () => {
  //   component.airline = undefined;
  //   component.start = undefined;
  //   component.end = undefined;
  //   // component.onSearch();
  //   // expect(component.onSearch()).toBeUndefined();
  // });

  // // it('onMatch', () => {
  // //   component.onMatch();
  // //   expect(component.TurnAround).toBeTruthy();
  // //   // const value = {};
  // //   // const service = fixture.debugElement.injector.get(SharedService);
  // //   // service.CreateTurnAround({}).subscribe((data)=>{
  // //   //   expect(data).toEqual(data.message);
  // //   //   done();
  // //   // });
  // //   // const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAround/CreateTurnAround');
  // //   // req.flush({});
  // //   // expect(req.request.method).toBe('POST');
  // // });

  // it('should call Arrival_Data', () => {
  //   const service = fixture.debugElement.injector.get(SharedService);
  //   spyOn(service, 'ArrivalFlights').and.returnValue(of({}));
  //   // component.Arrival_Data();
  //   expect(component.Arrival_Flights).toEqual({});
  // });

  // it('should call Departure_Data', () => {
  //   const service = fixture.debugElement.injector.get(SharedService);
  //   spyOn(service, 'DepartureFlights').and.returnValue(of({}));
  //   // component.Departure_Data();
  //   expect(component.Departure_Flights).toEqual({});
  // });

  // it('should call GetTurnAround', () => {
  //   const service = fixture.debugElement.injector.get(SharedService);
  //   spyOn(service, 'GetTurnAround').and.returnValue(of({}));
  //   // component.GetTurnAround();
  //   expect(component.TurnAroundData).toEqual({});
  // });

  // it('onClose', () => {
  //   // component.onClose();
  //   expect(component.airline_match).toBeFalse();
  // });

});
