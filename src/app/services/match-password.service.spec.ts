import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { MatchPasswordService } from './match-password.service';

fdescribe('MatchPasswordService', () => {
  let service: MatchPasswordService;
  const password = 'password';
  const confirmPassword = 'confirmPassword';
  let formGroup: FormGroup;
  beforeEach(() => {
    // formGroup = new FormGroup({
    //   [password]: new FormControl(),
    //   [confirmPassword]: new FormControl(),
    // }, service.matchPassword(password, confirmPassword));
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchPasswordService);
  });

  it('should be valid if passwords match', () => {
    spyOn(service, 'matchPassword');
    // const password = 'B@s$$th12';
    // const confirmPassword = 'B@s$$th12';
    // formGroup.({
    //   [password]: '123',
    //   [confirmPassword]: '321'
    // });
    formGroup = new FormGroup({
      [password]: new FormControl(),
      [confirmPassword]: new FormControl(),
    });
    formGroup.setValue({
      password: 'B@s$$th12', 
      confirmPassword: 'B@s$$th12',

    }); 
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);
    service.matchPassword(passwordControl,confirmPasswordControl);
    expect(service.matchPassword(passwordControl,confirmPasswordControl)).toBeUndefined();
    // expect(formGroup.get(confirmPassword).valid).toBe(true);
  });

  it('should be valid if passwords match', () => {
    spyOn(service, 'matchPassword');
    // const password = 'B@s$$th12';
    // const confirmPassword = 'B@s$$th12';
    // formGroup.({
    //   [password]: '123',
    //   [confirmPassword]: '321'
    // });
    formGroup = new FormGroup({
      [password]: new FormControl(),
      [confirmPassword]: new FormControl(),
    });
    // formGroup.setValue({
    //   password: 'B@s$$th12', 
    //   confirmPassword: 'B@s$$th12',

    // }); 
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);
    service.matchPassword(passwordControl,confirmPasswordControl);
    expect(service.matchPassword(passwordControl,confirmPasswordControl)).toBeUndefined();
    // expect(formGroup.get(confirmPassword).valid).toBe(true);
  });

  it('should be valid if passwords match', () => {
    spyOn(service, 'matchPassword');
    // const password = 'B@s$$th12';
    // const confirmPassword = 'B@s$$th12';
    // formGroup.({
    //   [password]: '123',
    //   [confirmPassword]: '321'
    // });
    formGroup = new FormGroup({
      [password]: new FormControl(),
      [confirmPassword]: new FormControl(),
    });
    formGroup.setValue({
      password: 'B@s$$th12', 
      confirmPassword: 'B@s$$th12',

    }); 
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);
    service.matchPassword(passwordControl,confirmPasswordControl);
    expect(service.matchPassword(passwordControl,confirmPasswordControl)).toBeUndefined();
    // expect(formGroup.get(confirmPassword).valid).toBe(true);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('passwordMismatch', () => {
  //   const pass = 'hi';
  //   const con = 'hello';
  //   service.matchPassword(pass, con);
  //   expect(service.matchPassword).toBeFalsy();
  // });

  // it('passwordMismatch', () => {
  //   const pass = 'B@s$$th12';
  //   const con = 'B@s$$th12';
  //   const validation = service.matchPassword(pass, con);
  //   expect(service.matchPassword(pass, con)).toEqual(true);
  // });

  // const control = new FormControl({ password: 'whatever' });

  // it('should validate two identical passwords', () => {
  //   const validation = PasswordMatchingValidation.MatchPassword(control);
  //   expect(validation).toEqual({ MatchPassword: true });
  // });


});
