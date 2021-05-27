import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {

  response:any;
  products:any;
  groceries: any;
  electronics: any;
  apparels: any;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
     this.productService.getProducts().subscribe((data) => {
      this.response = data;
      this.groceries = this.response.groceries;
      this.apparels = this.response.apparels;
      this.electronics = this.response.electronics;
    });   
    
    }
    
    onClickingGroceryItems(el: HTMLElement){
      let category = el.innerText;
      console.log("category" ,category);
      
      this.router.navigate([ 'products', category]);
    }

}
