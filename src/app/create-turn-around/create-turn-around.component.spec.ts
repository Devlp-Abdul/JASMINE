import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CreateTurnAroundComponent } from './create-turn-around.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { async, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
fdescribe('CreateTurnAroundComponent', () => {
  let component: CreateTurnAroundComponent;
  let fixture: ComponentFixture<CreateTurnAroundComponent>;
  let authService: SharedService;
  let httpTestingController : HttpTestingController;
  // let HttpClientgetspy: jasmine.SpyObj<HttpClient>;
  beforeEach(async () => {
    
    // HttpClientgetspy = jasmine.createSpyObj('HttpClient', ['get']);
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

  it('should call onCreate ArrivalFlightsByDateRange', () => {
    // const date1 = new Date();
    // const date2 = new Date();
    // component.onSearch(date1,date2);
    const service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'ArrivalFlightsByDateRange').and.returnValue(of([]));
    // component.onSearch(date1.toString(),date2.toString());
    expect(component.Arrival_FlightsByDate).toEqual([]);
  });

  it('should call onCreate', () => {
    const date1 = '2023-03-20';
    const date2 = '2023-03-25';
    component.onSearch();
    expect(component.onSearch()).toBeUndefined();
  });

  // it('should call onChange', () => {
  //   const value = 'any';
  //   component.onChange(value);
  //   expect(component.onChange).toBeUndefined();
  // });

  it('should call onCreate', () => {
    component.onCreate();
    expect(component.onCreate()).toBeUndefined();
  });

  it('onMatch', () => {
    component.onMatch();
    expect(component.TurnAround).toBeTruthy();
    // const value = {};
    // const service = fixture.debugElement.injector.get(SharedService);
    // service.CreateTurnAround({}).subscribe((data)=>{
    //   expect(data).toEqual(data.message);
    //   done();
    // });
    // const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAround/CreateTurnAround');
    // req.flush({});
    // expect(req.request.method).toBe('POST');
  });

  it('should call Arrival_Data', () => {
    const service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'ArrivalFlights').and.returnValue(of({}));
    component.Arrival_Data();
    expect(component.Arrival_Flights).toEqual({});
  });

  it('should call Departure_Data', () => {
    const service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'DepartureFlights').and.returnValue(of({}));
    component.Departure_Data();
    expect(component.Departure_Flights).toEqual({});
  });

  it('should call GetTurnAround', () => {
    const service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'GetTurnAround').and.returnValue(of({}));
    component.GetTurnAround();
    expect(component.TurnAroundData).toEqual({});
  });

  it('onClose', () => {
    component.onClose();
    expect(component.airline_match).toBeFalse();
  });

});
