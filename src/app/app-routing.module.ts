import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

const routes: Routes = [
  {path: 'shop', component:ShopByCategoryComponent},
  {path: '#', component:HomeComponent},
  {path: 'products', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
