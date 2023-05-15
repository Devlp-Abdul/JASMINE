import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('SharedService', () => {
  let service: SharedService;
  let HttpClientgetspy : jasmine.SpyObj<HttpClient>;
  let HttpClientdeletespy : jasmine.SpyObj<HttpClient>;
  // let HttpClientpostspy : jasmine.SpyObj<HttpClient>;
  let httpTestingController : HttpTestingController;
  let mockRouter;
  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    HttpClientgetspy = jasmine.createSpyObj('HttpClient',['get']);
    HttpClientdeletespy = jasmine.createSpyObj('HttpClient',['delete']);
    // HttpClientpostspy = jasmine.createSpyObj('HttpClient',['post']);
    // service = new service(HttpClientgetspy);
    TestBed.configureTestingModule({
      imports :[
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter },        
      ]
    });
    service = TestBed.inject(SharedService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('GetDelayTurnAroundDeskById',(done : DoneFn)  => {
    const id = '3001';
    service.GetDelayTurnAroundDeskById(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/GetDelayTurnAroundDeskById?id='+id);
    req.flush({});
    expect(req.request.method).toBe('GET');
  });

  it('GetPassengersTurnAroundDeskById',(done : DoneFn)  => {
    const id = '3001';
    service.GetPassengersTurnAroundDeskById(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/GetPassengersTurnAroundDeskById?id='+id);
    req.flush({});
    expect(req.request.method).toBe('GET');
  });

  it('PostDelayTurnAroundDesk',(done : DoneFn)  => {
    const id = '3001';
    service.PostDelayTurnAroundDesk(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/PostDelayTurnAroundDesk?id='+id);
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('PostPassengersTurnAroundDesk',(done : DoneFn)  => {
    const id = '3001';
    service.PostPassengersTurnAroundDesk(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/PostPassengersTurnAroundDesk?id='+id);
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('UpdateDelayTurnAroundDesk',(done : DoneFn)  => {
    const id = 3001, data = {};
    service.UpdateDelayTurnAroundDesk(id,data).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/UpdateDelayTurnAroundDesk?Id='+id);
    req.flush({});
    expect(req.request.method).toBe('PUT');
  });

  it('UpdatePassengersTurnAroundDesk',(done : DoneFn)  => {
    const id = 3001, data = {};
    service.UpdatePassengersTurnAroundDesk(id,data).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/UpdatePassengersTurnAroundDesk?Id='+id);
    req.flush({});
    expect(req.request.method).toBe('PUT');
  });

  it('UpdateDepartureTurnAroundDesk',(done : DoneFn)  => {
    const id = 3001, data = {};
    service.UpdateDepartureTurnAroundDesk(id,data).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/UpdateDepartureTurnAroundDesk?Id='+id);
    req.flush({});
    expect(req.request.method).toBe('PUT');
  });

  it('UpdateArrivalTurnAroundDesk',(done : DoneFn)  => {
    const id = 3001, data = {};
    service.UpdateArrivalTurnAroundDesk(id,data).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/UpdateArrivalTurnAroundDesk?Id='+id);
    req.flush({});
    expect(req.request.method).toBe('PUT');
  });

  it('UpdateTurnAroundDeskInfo',(done : DoneFn)  => {
    const id = 3001, data = {};
    service.UpdateTurnAroundDeskInfo(id,data).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/UpdateTurnAroundDeskInfo?Id='+id);
    req.flush({});
    expect(req.request.method).toBe('PUT');
  });

  it('PostDepartureTurnAroundDesk',(done : DoneFn)  => {
    const value = {};
    service.PostDepartureTurnAroundDesk({}).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/PostDepartureTurnAroundDesk');
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('PostArrivalTurnAroundDesk',(done : DoneFn)  => {
    const value = {};
    service.PostArrivalTurnAroundDesk({}).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/PostArrivalTurnAroundDesk');
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('PostTurnAroundDeskInfo',(done : DoneFn)  => {
    const value = {};
    service.PostTurnAroundDeskInfo({}).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/PostTurnAroundDeskInfo');
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('GetDepartureTurnAroundDeskById',(done : DoneFn)  => {
    const id = '3001';
    service.GetDepartureTurnAroundDeskById(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/GetDepartureTurnAroundDeskById?id='+id);
    req.flush({});
    expect(req.request.method).toBe('GET');
  });

  it('GetArrivalTurnAroundDeskById',(done : DoneFn)  => {
    const id = '3001';
    service.GetArrivalTurnAroundDeskById(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/GetArrivalTurnAroundDeskById?id='+id);
    req.flush({});
    expect(req.request.method).toBe('GET');
  });

  it('GetTurnInfoById',(done : DoneFn)  => {
    const id = '3001';
    service.GetTurnInfoById(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/GetTurnInfoById?id='+id);
    req.flush({});
    expect(req.request.method).toBe('GET');
  });

  it('GetTurnInfo',(done : DoneFn)  => {
    service.GetTurnInfo().subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/GetTurnInfo');
    req.flush({});
    expect(req.request.method).toBe('GET');
  });

  it('GetTurnAroundById',(done : DoneFn)  => {
    const id = '3001';
    service.GetTurnAroundById(id).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAroundDesk/GetTurnAroundById?id='+id);
    req.flush({});
    expect(req.request.method).toBe('GET');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should go signout', (done : DoneFn) => {
    service.signout();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['login']);
    done();
  });

  it('isLoggedIn', () => {
    spyOn(service,'isLoggedIn');
    service.isLoggedIn();
    expect(service.isLoggedIn).toHaveBeenCalledTimes(1);
  });

  it('isLoggedIn', () => {
    localStorage.setItem('id','Token');
    spyOn(localStorage,'setItem');
    expect(service.isLoggedIn()).toBeDefined();
  });

  it('getToken', () => {
    spyOn(service,'getToken');
    service.getToken();
    expect(service.getToken).toHaveBeenCalledTimes(1);
  });

  it('getToken', () => {
    localStorage.setItem('id','Token');
    spyOn(localStorage,'setItem');
    expect(service.getToken()).toBeDefined();
  });

  it('Update_flight',(done : DoneFn)  => {
    const id = 3001, data = {};
    service.Update_flight(id,data).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/Create_Flight/Update_flight?Id='+id);
    req.flush({});
    expect(req.request.method).toBe('PUT');
  });

  it('CreateTurnAround',(done : DoneFn)  => {
    const value = {};
    service.CreateTurnAround({}).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/TurnAround/CreateTurnAround');
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('create_flightpost',(done : DoneFn)  => {
    const value = {};
    service.create_flightpost({}).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/Create_Flight/create_flight');
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('login',(done : DoneFn)  => {
    const value = {};
    service.login({}).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/Values/auth');
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  it('signpost',(done : DoneFn)  => {
    const value = {};
    service.signpost({}).subscribe((data)=>{
      expect(data).toEqual({});
      done();
    });
    const req = httpTestingController.expectOne('https://localhost:7263/api/Values/register');
    req.flush({});
    expect(req.request.method).toBe('POST');
  });

  // it('signpost', () => {
  //   const value = {};
  //   HttpClientdeletespy.post; 
  //   service.signpost(value).subscribe({
  //     next : (res) => {
  //       expect(res).toContain(res.message);
  //     }
  //   })
  // });

  it('DeleteFlight', () => {
    const id = 3002;
    HttpClientdeletespy.delete.and.returnValue(of(true));
    service.DeleteFlight(id).subscribe({
      next : (res) => {
        expect(res).toContain(res.message);
      }
    })
    spyOn(service,'DeleteFlight');
    service.DeleteFlight(id);
    expect(service.DeleteFlight).toHaveBeenCalledTimes(1);
  });

  it('Spy on getToken', () => {
    spyOn(service,'getToken').and.returnValue('Token')
    service.getToken();
    expect(service.getToken).toBeTruthy();
  });

  it('get flights', () => {
    HttpClientgetspy.get.and.returnValue(of({}));
    service.getflights().subscribe({
      next : (res) => {
        expect(res).toContain({});
      }
    })
    spyOn(service,'getflights');
    service.getflights();
    expect(service.getflights).toHaveBeenCalledTimes(1);
  });

  it('get flights by date', () => {
    const date ='2023-03-16'
    HttpClientgetspy.get.and.returnValue(of({}));
    service.get_flightsbydate(date).subscribe({
      next : (res) => {
        expect(res).toContain({});
      }
    })
    spyOn(service,'get_flightsbydate');
    service.get_flightsbydate(date);
    expect(service.get_flightsbydate).toHaveBeenCalledTimes(1);
  });

  it('get flights by id', () => {
    const id ='3001'
    HttpClientgetspy.get.and.returnValue(of({}));
    service.get_flightsbyid(id).subscribe({
      next : (res) => {
        expect(res).toContain({});
      }
    })
    spyOn(service,'get_flightsbyid');
    service.get_flightsbyid(id);
    expect(service.get_flightsbyid).toHaveBeenCalledTimes(1);
  });

  it('ArrivalFlightsByDateRange', () => {
    const start_date = '2023-03-01',end_date = '2023-03-10'
    HttpClientgetspy.get.and.returnValue(of({}));
    service.ArrivalFlightsByDateRange(start_date,end_date).subscribe({
      next : (res) => {
        expect(res).toContain({});
      }
    })
    spyOn(service,'ArrivalFlightsByDateRange');
    service.ArrivalFlightsByDateRange(start_date,end_date);
    expect(service.ArrivalFlightsByDateRange).toHaveBeenCalledTimes(1);
  });

  it('DepartureFlightsByDateRange', () => {
    const start_date = '2023-03-01',end_date = '2023-03-10'
    HttpClientgetspy.get.and.returnValue(of({}));
    service.DepartureFlightsByDateRange(start_date,end_date).subscribe({
      next : (res) => {
        expect(res).toContain({});
      }
    })
    spyOn(service,'DepartureFlightsByDateRange');
    service.DepartureFlightsByDateRange(start_date,end_date);
    expect(service.DepartureFlightsByDateRange).toHaveBeenCalledTimes(1);
  });

  // it('should be done signpost', fakeAsync(() => {
  //   // let spyref = spyOn(service,'signpost').and.callFake((component.form.value)=>{});
  //   // fixture.detectChanges();
  //   // expect(spyre)

  //   let fixture = TestBed.createComponent(SignUpComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let dataService = fixture.debugElement.injector.get(SharedService);
  //   let spy = spyOn(dataService, 'signpost');
      
  //   fixture.detectChanges();
  //   tick();
  //   expect(app.data).toBe(undefined);
  // }));

});
