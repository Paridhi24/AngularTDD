import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbarOpen: boolean = false;
  isLoggedIn: any = false;

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.isActiveSession.subscribe(data => {
      this.isLoggedIn = data;   
    });
  }

  displayCategories(){
    this.router.navigate([ 'shop' ])
  }

  login(){
    this.router.navigate([ 'login' ])
  }

  logout(){
    this.authService.loggedOut();    
  }
}
