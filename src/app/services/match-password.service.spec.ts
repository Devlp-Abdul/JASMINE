import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatchPasswordService } from './match-password.service';

xdescribe('MatchPasswordService', () => {
  let service: MatchPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('true', () => {
    let formGroup: FormGroup;
    let fb: FormBuilder;
    formGroup = fb.group(
      {
        password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
        confirmpassword: ['', [Validators.required]],
      },
      {
        validators: [
          service.matchPassword("password", "confirmpassword"),
        ],
      }
    );
    const passwordControl = formGroup.controls?.['password'].setValue('B@s$$th12');
    const confirmPasswordControl = formGroup.controls?.['confirmpassword'].setValue('B@s$$th1');
    spyOn(service,'matchPassword');
    service.matchPassword("password", "confirmpassword"),
    expect(service.matchPassword).toEqual({ passwordMismatch: true });
  });
});
