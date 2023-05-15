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
  signout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  setToken(Token : string){
    localStorage.setItem('Token',Token)
  }
  getToken(){
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
  get_flightsbyid(val:any){
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

  // TURNAROUND DESK
  GetTurnAroundById(val : string){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetTurnAroundById?id=${val}`);
  }
  GetTurnInfo(){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetTurnInfo`);
  }
  GetTurnInfoById(val : string){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetTurnInfoById?id=${val}`);
  }
  PostTurnAroundDeskInfo(val:any){
    return this.http.post<any>(`${this.baseurl}TurnAroundDesk/PostTurnAroundDeskInfo`,val);
  }
  UpdateTurnAroundDeskInfo(id:number,data : any){
    return this.http.put<any>(`${this.baseurl}TurnAroundDesk/UpdateTurnAroundDeskInfo?Id=${id}`,data);
  }
  GetArrivalTurnAroundDesk(){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetArrivalTurnAroundDesk`);
  }
  GetArrivalTurnAroundDeskById(val : any){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetArrivalTurnAroundDeskById?id=${val}`);
  }
  PostArrivalTurnAroundDesk(val:any){
    return this.http.post<any>(`${this.baseurl}TurnAroundDesk/PostArrivalTurnAroundDesk`,val);
  }
  UpdateArrivalTurnAroundDesk(id:number,data : any){
    return this.http.put<any>(`${this.baseurl}TurnAroundDesk/UpdateArrivalTurnAroundDesk?Id=${id}`,data);
  }
  GetDepartureTurnAroundDesk(){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetDepartureTurnAroundDesk`);
  }
  GetDepartureTurnAroundDeskById(val : any){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetDepartureTurnAroundDeskById?id=${val}`);
  }
  PostDepartureTurnAroundDesk(val:any){
    return this.http.post<any>(`${this.baseurl}TurnAroundDesk/PostDepartureTurnAroundDesk`,val);
  }
  UpdateDepartureTurnAroundDesk(id:number,data : any){
    return this.http.put<any>(`${this.baseurl}TurnAroundDesk/UpdateDepartureTurnAroundDesk?Id=${id}`,data);
  }
  GetPassengersTurnAroundDeskById(val : any){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetPassengersTurnAroundDeskById?id=${val}`);
  }
  PostPassengersTurnAroundDesk(val:any){
    return this.http.post<any>(`${this.baseurl}TurnAroundDesk/PostPassengersTurnAroundDesk?id=${val}`,val);
  }
  UpdatePassengersTurnAroundDesk(id:number,data : any){
    return this.http.put<any>(`${this.baseurl}TurnAroundDesk/UpdatePassengersTurnAroundDesk?Id=${id}`,data);
  }
  GetDelayTurnAroundDeskById(val : any){
    return this.http.get<any>(`${this.baseurl}TurnAroundDesk/GetDelayTurnAroundDeskById?id=${val}`);
  }
  PostDelayTurnAroundDesk(val:any){
    return this.http.post<any>(`${this.baseurl}TurnAroundDesk/PostDelayTurnAroundDesk?id=${val}`,val);
  }
  UpdateDelayTurnAroundDesk(id:number,data : any){
    return this.http.put<any>(`${this.baseurl}TurnAroundDesk/UpdateDelayTurnAroundDesk?Id=${id}`,data);
  }

  SendRequest(email : string){
    return this.http.post<any>(`${this.baseurl}Auth/send-reset-email/${email}`,email);
  }
}
