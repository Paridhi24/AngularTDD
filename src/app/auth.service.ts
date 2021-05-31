import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uname:string = '';
  pword: string= '';
  isActiveSession = new Subject();
  constructor(private _route: Router) { }

  loginCredentials(username: string, password:string){
    this.uname = username;
    this.pword = password;
    localStorage.setItem('username', 'uname');    
    this._route.navigate(['shop']);
  }

  loggedIn(){
    if(localStorage.getItem('username')){
      this.isActiveSession.next(true);
      return true;
    }else {
      return false;
    }
  }

  loggedOut(){
      this.isActiveSession.next(false);
      localStorage.removeItem('username');
      this._route.navigate(['login']);
  
  }

}
