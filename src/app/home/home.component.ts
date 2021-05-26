import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbarOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayCategories(){
    this.router.navigate([ 'shop' ])
  }

}
