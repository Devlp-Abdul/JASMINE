import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { SharedService } from '../shared.service';
import { TurnAroundDeskComponent } from './turn-around-desk.component';

xdescribe('TurnAroundDeskComponent', () => {
  let component: TurnAroundDeskComponent;
  let fixture: ComponentFixture<TurnAroundDeskComponent>;
  let route : ActivatedRoute;
  let authService: SharedService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule     
      ],
      declarations: [ 
        TurnAroundDeskComponent
       ],
      providers :[
        {provide : ActivatedRoute, useValue : { snapshot : { params: { 'id' : '3001','flight_Name' : 'Air Malta'}}}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnAroundDeskComponent);
    route = TestBed.inject(ActivatedRoute);
    authService = TestBed.inject(SharedService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create', (done : DoneFn) => {
  //   // const spyRoute = spyOn(route.snapshot.paramMap,'get');
  //   // spyRoute.and.returnValue('id');
  //   // component.ngOnInit();
  //   // fixture.detectChanges();
  //   let id ='';
  //   route.paramMap.subscribe({
  //     next : (params) => {
  //       id = params.get('id');
  //       expect(id).toBe(params.get('id'));
  //     }
  //   })
  //   //   done();
  //   // });
  // });

  // it('form should be Invalid', () => {
  //   component.form.controls?.['name'].setValue('');
  //   component.form.controls?.['email'].setValue('');
  //   component.form.controls?.['dob'].setValue('');
  //   component.form.controls?.['password'].setValue('');
  //   component.form.controls?.['confirmpassword'].setValue('');
  //   component.form.controls?.['mobile'].setValue('');
  //   expect(component.form.valid).toBeFalsy();
  // });
});
