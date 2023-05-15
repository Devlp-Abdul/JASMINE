import { JsonpInterceptor } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-schedule-search',
  templateUrl: './schedule-search.component.html',
  styleUrls: ['./schedule-search.component.css']
})
export class ScheduleSearchComponent implements OnInit {

  term: string;
  day: string;
  Schedule: string;
  date: Date = new Date();
  form: FormGroup;
  flights : any
  

  current_Date = this.date.toDateString().substring(3, this.date.toDateString().length);
  flight_data : any =[]

  dateFilter = (date: Date): boolean => { return true; }

  search_click: boolean = false;
  flight_data1 : any =[]


  constructor(private router: Router,private fb: FormBuilder, private auth: SharedService) { }

  ngOnInit(): void {
    this.getdata();  
  }

  create() {
    this.router.navigate(["home/create"]);
  }

  getdata() {
    this.auth.getflights().subscribe(data => {
      this.flight_data = data;       
      console.log(this.flight_data);
    });
  }

  search(val : string) {
    console.log(this.term);
    this.auth.get_flightsbydate(val).subscribe(data => {      
      this.flight_data = data;
    });
  }

}
