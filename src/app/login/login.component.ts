import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string='';
  password: string='';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm : NgForm){
    if(loginForm.valid){
    this.username = loginForm.value.username;
    this.password = loginForm.value.password;
    this.authService.loginCredentials(this.username, this.password);    
    }
  }

  shop(){
    this.router.navigate(['shop'])
  }

}
