import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RetailerDetailsComponent } from './retailer-details/retailer-details.component';
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, children:
  [
    {path:"products/:name", component: ProductDetailsComponent},
    {path: 'shop', component:ShopByCategoryComponent, canActivate:[AuthGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'retailers', component:RetailerDetailsComponent, canActivate:[SecureInnerPagesGuard]}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
