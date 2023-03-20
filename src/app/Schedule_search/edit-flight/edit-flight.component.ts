import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router  } from '@angular/router';

import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {

  Aircraft : any=['A319','AT70','ATR72','CRJ9','B752','H24','B734','A318','HA4T','32A','E170','B739','B735','A32N','A21N','32N'];
  Airlines : any=['easyJet','Air Malta','Volotea','Stobart Aviation/Flybe','Loganair','Ryanair','Blue Islands','Eurowings','Aurigny','Brussels Airlines'];
  flight_details: any = {
    id: 0,
    direction: '',
    origin: '',
    destination: '',
    aircraft_Type: '',
    airlines: '',
    flight_Code: '',
    scheduled_date: new Date('yyyy-MM-dd'),
  }
  // direction: string;
  // origin: string;
  // destination: string;
  // aircraft_type:string;
  // airlines:string;
  // flight_code: string;
  // scheduled_date: Date;

  constructor(private route: ActivatedRoute, private auth: SharedService, private router : Router) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);
        if (id) {
          this.auth.get_flightsbyid(id).subscribe({
            next: (response) => {
              this.flight_details = response;
              console.log(this.flight_details);
            }
          })
        }
      }
    })
  }

  onUpdate(){
    this.auth.Update_flight(this.flight_details.id,this.flight_details).subscribe({
      next : (response) => {
        // this.router.navigate(['']);
      }
    })
  }

}

// console.log(id);
//         this.auth.get_flightsbyid(id).subscribe(data => {
//           this.flight_data = data;       
//         //   console.log(this.flight_data);
//         //   console.log(this.flight_data.scheduled_date);
//         });