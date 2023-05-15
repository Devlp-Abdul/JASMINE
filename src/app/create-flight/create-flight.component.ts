import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  Aircraft : any=['A319','AT70','ATR72','CRJ9','B752','H24','B734','A318','HA4T','32A','E170','B739','B735','A32N','A21N','32N'];
  Airlines : any=['easyJet','Air Malta','Volotea','Stobart Aviation/Flybe','Loganair','Ryanair','Blue Islands','Eurowings','Aurigny','Brussels Airlines'];
 
  constructor(private router: Router, private fb: FormBuilder, private auth: SharedService) { }

  
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        direction :['Arrival', [Validators.required]],
        origin: ['', [Validators.required]],
        destination: ['', [Validators.required]],
        aircraft_type : ['', [Validators.required]],
        airlines : ['', [Validators.required]],
        flight_code: ['', [Validators.required]],
        scheduled_date: ['', [Validators.required]],
        // scheduled_time: ['', [Validators.required]],
      },
    );
  }

  get direction(){
    return this.direction.get('direction');
  }
  get origin(){
    return this.form.get('origin');
  }
  get destination(){
    return this.form.get('destination');
  }
  get aircraft_type(){
    return this.form.get('aircraft_type');
  }
  get airlines(){
    return this.form.get('airlines');
  }
  get flight_code(){
    return this.form.get('flight_code');
  }
  get scheduled_date(){
    return this.form.get('scheduled_date');
  }
  // get scheduled_time(){
  //   return this.form.get('scheduled_time');
  // }

  onSubmit(){
    this.submitted=true;
    if (this.form.valid) {

      console.log(this.form.value);
      console.log(this.form.value.scheduled_date);
      // console.log(this.form.value.scheduled_time);
      this.auth.create_flightpost(this.form.value).subscribe({
        next: (res) => {
          alert(res.message);
          // this.form.reset();
          // this.router.navigate(['login']);
          
        },
        error: (err) => {
          alert(err?.error.message)
        }
      })
    }    
  }
  
}

