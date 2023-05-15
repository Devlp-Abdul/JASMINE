import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private auth : SharedService, private router : Router){}
  canActivate():boolean {
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
