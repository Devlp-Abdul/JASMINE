import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DebugElement } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { SharedService } from '../shared.service';
import { of } from 'rxjs';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let debugElement: DebugElement;
  let location, router: Router;
  let mockRouter;

  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
          { path: '', component: LoginPageComponent },
          { path: 'login', component: LoginPageComponent },
          { path: 'signup', component: SignUpComponent },
        ]),
      ],
      declarations: [
        SignUpComponent,
        HomePageComponent
      ],
      providers: [
        { provide: Router, useValue: mockRouter },        
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be Invalid', () => {
    component.form.controls?.['name'].setValue('');
    component.form.controls?.['email'].setValue('');
    component.form.controls?.['dob'].setValue('');
    component.form.controls?.['password'].setValue('');
    component.form.controls?.['confirmpassword'].setValue('');
    component.form.controls?.['mobile'].setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.form.controls?.['name'];
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it('email field validity', () => {
    const email = component.form.controls?.['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

    email.setValue('email');
    expect(email.hasError('pattern')).toBeTruthy();

  });

  it('DOB field validity', () => {
    const dob = component.form.controls?.['dob'];
    expect(dob.valid).toBeFalsy();

    dob.setValue('');
    expect(dob.hasError('required')).toBeTruthy();

  });

  it('password field validity', () => {
    const password = component.form.controls?.['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();

    password.setValue('pass876');
    expect(password.hasError('pattern')).toBeTruthy();

  });

  it('confirmpassword field validity', () => {
    const confirmpassword = component.form.controls?.['confirmpassword'];
    expect(confirmpassword.valid).toBeFalsy();

    confirmpassword.setValue('');
    expect(confirmpassword.hasError('required')).toBeTruthy();

  });

  it('mobile field validity', () => {
    const mobile = component.form.controls?.['mobile'];
    expect(mobile.valid).toBeFalsy();

    mobile.setValue('');
    expect(mobile.hasError('required')).toBeTruthy();

    mobile.setValue('5435354435fdd');
    expect(mobile.hasError('pattern')).toBeTruthy();

    mobile.setValue('543535443543345354');
    expect(mobile.hasError('maxlength')).toBeTruthy();

  });

  it('Get name field value', () => {
    expect(component.name).toEqual(component.form.controls?.['name']);
  });

  it('Get email field value', () => {
    expect(component.email).toEqual(component.form.controls?.['email']);
  });

  it('Get dob field value', () => {
    expect(component.dob).toEqual(component.form.controls?.['dob']);
  });

  it('Get password field value', () => {
    expect(component.password).toEqual(component.form.controls?.['password']);
  });

  it('Get confirmpassword field value', () => {
    expect(component.confirmpassword).toEqual(component.form.controls?.['confirmpassword']);
  });

  it('Get mobile field value', () => {
    expect(component.mobile).toEqual(component.form.controls?.['mobile']);
  });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);

  });

  it('form should be valid', () => {

    component.form.controls?.['name'].setValue('abdul');
    component.form.controls?.['email'].setValue('abdul@gmail.com');
    component.form.controls?.['dob'].setValue('20-11-2001');
    component.form.controls?.['password'].setValue('B@s$$th123');
    component.form.controls?.['confirmpassword'].setValue('B@s$$th123');
    component.form.controls?.['mobile'].setValue('9087654321');
    expect(component.form.valid).toBeTruthy();

  });

  it('register in the signpost()', async(() => {

    component.form.controls?.['name'].setValue('abdul');
    component.form.controls?.['email'].setValue('abdul@gmail.com');
    component.form.controls?.['dob'].setValue('20-11-2001');
    component.form.controls?.['password'].setValue('B@s$$th123');
    component.form.controls?.['confirmpassword'].setValue('B@s$$th123');
    component.form.controls?.['mobile'].setValue('9087654321');
    expect(component.form.valid).toBeTruthy();

    let service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'signpost').and.callFake(()=>{
      component.form.controls?.['name'].setValue('abdul');
    component.form.controls?.['email'].setValue('abdul@gmail.com');
    component.form.controls?.['dob'].setValue('20-11-2001');
    component.form.controls?.['password'].setValue('B@s$$th123');
    component.form.controls?.['confirmpassword'].setValue('B@s$$th123');
    component.form.controls?.['mobile'].setValue('9087654321');
      return of({});
    })
    
    component.onSubmit();
    expect(component.onSubmit).not.toBeFalsy();

  }));

  it('should go login', async(() => {
    fixture.detectChanges();
    component.login();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['login']);
  }));

  // it('should call login method', () => {
  //   spyOn(component, 'login');
  //   component.login();
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  //   expect(component.login).toHaveBeenCalledTimes(1);
  // });

  // it('should check for validator error and pass', () => {
  //   component.form.get('name').patchValue('Test Value');
  //   expect(component.name.valid).toBeTruthy();
  // });
});
