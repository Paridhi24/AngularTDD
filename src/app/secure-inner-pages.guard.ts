import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {

  constructor(private authService: AuthService, private _router:Router){}

  canActivate(){
    if(this.authService.loggedIn()) {
      window.alert("Access denied for this particular page!!!!");
      this._router.navigate(['']);
      return false;
  }
  return true;
}
}
