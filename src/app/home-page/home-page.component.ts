import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  date: Date = new Date();
  current_Date = this.date.toDateString().substring(3, this.date.toDateString().length);
  TurnInfo: any =[];
  ArrInfo : any =[];
  DepInfo : any =[];
  start : any;
  end : any;

  constructor(private router : Router,private auth:SharedService){}

  ngOnInit(): void {
    this.auth.GetArrivalTurnAroundDesk().subscribe(data => {
      this.ArrInfo = data;
      // console.log(this.ArrInfo);      
    });
    this.auth.GetDepartureTurnAroundDesk().subscribe(data => {
      this.DepInfo = data;
      // console.log(this.DepInfo);      
    });
  }
  
}
