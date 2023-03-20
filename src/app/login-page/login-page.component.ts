import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../Authguards/auth.guard';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']

})
export class LoginPageComponent implements OnInit{
  
  // user : string;
  form : FormGroup;
  submitted = false;
  
  constructor(private router: Router, private fb:FormBuilder,private auth:SharedService,private guard : AuthGuard) { }

  ngOnInit():void{

    this.form = this.fb.group({
      email :['',[Validators.required]],
      password: ['',[Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"  )]],
    })
  }

  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
  
  onSubmit(){
    this.submitted = true;  
   
    // if(this.form.value.email == 'admin' && this.form.value.password == 'B@s$$tH123')
    if(this.form.valid){
      // console.log(this.form.value)
      this.auth.login(this.form.value).subscribe({
        next:(res)=>{
          // alert(res.message);
          // console.log(res.token);
          this.form.reset();
          this.auth.setToken(res.token);
          this.router.navigate(['home']);
        }
      })
    } 
  }

  signup():void{
    this.router.navigate(["signup"]);
  }
}
