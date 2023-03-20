import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseurl : string ="https://localhost:7263/api/";
  constructor(private http:HttpClient, private router:Router) { }
  // Sign-up & Sign-in
  signpost(val: any) {
    return this.http.post<any>(`${this.baseurl}Values/register`, val);
  }
  login(val: any) {
    return this.http.post<any>(`${this.baseurl}Values/auth`, val);
  }
  signout():any{
    localStorage.clear();
    this.router.navigate(['login']);
  }
  setToken(Token : string){
    localStorage.setItem('Token',Token)
  }
  getToken():string{
    return localStorage.getItem('Token')
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('Token')
  }
  // Schedule_Search
  create_flightpost(val:any){
    return this.http.post<any>(`${this.baseurl}Create_Flight/create_flight`, val);
  }
  getflights():Observable<any[]>{
    return this.http.get<any>(`${this.baseurl}Create_Flight/getflights`);
  }
  get_flightsbydate(val:string){
    return this.http.get<any>(`${this.baseurl}Create_Flight/get_flightsbydate?date=${val}`);
  }
  get_flightsbyid(val:string){
    return this.http.get<any>(`${this.baseurl}Create_Flight/getflightsbyid?id=${val}`);
  }
  DeleteFlight(id:number){
    return this.http.delete<any>(`${this.baseurl}Create_Flight/delete_flight?Id=${id}`);
  }
  Update_flight(id:number,data : any){
    return this.http.put<any>(`${this.baseurl}Create_Flight/Update_flight?Id=${id}`,data);
  }
  // TurnAround
  ArrivalFlights(){
    return this.http.get<any>(`${this.baseurl}TurnAround/ArrivalFlights`);
  }
  DepartureFlights(){
    return this.http.get<any>(`${this.baseurl}TurnAround/DepartureFlights`);
  }
  ArrivalFlightsByDateRange(start:string , end:string){
    return this.http.get<any>(`${this.baseurl}TurnAround/ArrivalFlightsByDateRange?start=${start}&end=${end}`);
  }
  DepartureFlightsByDateRange(start:string , end:string){
    return this.http.get<any>(`${this.baseurl}TurnAround/DepartureFlightsByDateRange?start=${start}&end=${end}`);
  }
  GetTurnAround(){
    return this.http.get<any>(`${this.baseurl}TurnAround/GetTurnAround`);
  }
  CreateTurnAround(val:any){
    return this.http.post<any>(`${this.baseurl}TurnAround/CreateTurnAround`, val);
  }
}
