import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchPasswordService } from '../services/match-password.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  constructor(private router: Router, private fb: FormBuilder, private MatchPasswordService: MatchPasswordService,
    private auth: SharedService) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_]+@+[a-zA-Z]+[.]+[a-zA-Z]+$")]],
        dob: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
        confirmpassword: ['', [Validators.required]],
        mobile: ['', [Validators.required, Validators.pattern("^[0-9]{10}$"), Validators.maxLength(10)]],
      },
      {
        validators: [
          this.MatchPasswordService.matchPassword("password", "confirmpassword"),
        ],
      }
    );
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }

  get dob() {
    return this.form.get('dob');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmpassword() {
    return this.form.get('confirmpassword');
  }
  get mobile() {
    return this.form.get('mobile');
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.auth.signpost(this.form.value).subscribe({
        next: (res) => {
          // alert(res.message);
          this.form.reset();
          this.router.navigate(['login']);
        }
      })
    }
  };

  login() {
    this.router.navigate(['login']);
  };
  
}
