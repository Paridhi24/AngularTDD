import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, children:
  [
    {path:"products/:name", component: ProductDetailsComponent},
    {path: 'shop', component:ShopByCategoryComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
