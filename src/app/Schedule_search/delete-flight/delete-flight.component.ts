import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent {
  flight_details: any = {
    id: 0,
    direction: '',
    origin: '',
    destination: '',
    aircraft_Type: '',
    airlines: '',
    flight_Code: '',
    scheduled_date: new Date(),
  }

  constructor(private route: ActivatedRoute, private auth: SharedService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        // console.log(id);
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

  onDelete(id : number){
    if (confirm('sure?')) {
       this.auth.DeleteFlight(id).subscribe({
        next : (response) => {
          // this.router.navigate(['']);
        }
       })
    }
    // this.route.paramMap.subscribe({
    //   next: (params) => {
    //     const id = params.get('id');
    //     // console.log(id);
    //     if (confirm('sure?')) {
    //       this.auth.DeleteFlight(this.flight_details.id);
       
    //       // .subscribe({
    //       //   next: (res) => {
    //       //     alert(res.message);
    //       //     this.router.navigate(['schedule']);
    //       //   },
    //       //   error: (err) => {
    //       //     alert(err?.error.message)
    //       //   }
    //       // })
    //     }
    //   }
    // })    
  }

}

