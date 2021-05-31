import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RetailerDetailsComponent } from './retailer-details/retailer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopByCategoryComponent,
    ProductDetailsComponent,
    LoginComponent,
    RetailerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
