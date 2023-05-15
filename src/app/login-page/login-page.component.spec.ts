import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { of } from 'rxjs';
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let mockRouter;
  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      imports : [
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginPageComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be Invalid', () => {
    component.form.controls?.['email'].setValue('');
    component.form.controls?.['password'].setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const email = component.form.controls?.['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

  });

  it('password field validity', () => {
    const password = component.form.controls?.['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();

    password.setValue('pass876');
    expect(password.hasError('pattern')).toBeTruthy();

  });

  it('Get email field value', () => {
    expect(component.email).toEqual(component.form.controls?.['email']);
  });

  it('Get password field value', () => {
    expect(component.password).toEqual(component.form.controls?.['password']);
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
    component.form.controls?.['email'].setValue('abdul@gmail.com');
    component.form.controls?.['password'].setValue('B@s$$th123');
    expect(component.form.valid).toBeTruthy();
  });
  
  it('should auth login', async(() => {
    component.form.controls?.['email'].setValue('abdul@gmail.com');
    component.form.controls?.['password'].setValue('B@s$$th123');
    expect(component.form.valid).toBeTruthy();

    let service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'login').and.callFake(()=>{
    component.form.controls?.['email'].setValue('abdul@gmail.com');
    component.form.controls?.['password'].setValue('B@s$$th123');
      return of({});
    })
    
    component.onSubmit();
    expect(component.onSubmit).not.toBeFalsy();
  }));

  it('should go signup', async(() => {
    fixture.detectChanges();
    component.signup();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['signup']);
  }));
  
});
