import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RetailerDetailsComponent } from './retailer-details/retailer-details.component';
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
import { AuthGuard } from './auth.guard';
describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, ShopByCategoryComponent, ProductDetailsComponent],
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to homeComonent', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/");
    });
  }));

  it('routes should contain the path /shop or product category', () => {
    expect(routes).toContain({path: '', component: HomeComponent, children:
    [
      {path:"products/:name", component: ProductDetailsComponent},
    {path: 'shop', component:ShopByCategoryComponent, canActivate:[AuthGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'retailers', component:RetailerDetailsComponent, canActivate:[SecureInnerPagesGuard]}
  ]});    
  });

  it('routes should contain the path /products', () => {
    expect(routes).toContain({path: '', component: HomeComponent, children:
    [
    {path:"products/:name", component: ProductDetailsComponent},
    {path: 'shop', component:ShopByCategoryComponent, canActivate:[AuthGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'retailers', component:RetailerDetailsComponent, canActivate:[SecureInnerPagesGuard]}
  ]});    
  });

  it('routes should contain the path /login', () => {
    expect(routes).toContain({path: '', component: HomeComponent, children:
    [
    {path:"products/:name", component: ProductDetailsComponent},
    {path: 'shop', component:ShopByCategoryComponent, canActivate:[AuthGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'retailers', component:RetailerDetailsComponent, canActivate:[SecureInnerPagesGuard]}
  ]});    
  });

  it('routes should contain the path /retailers', () => {
    expect(routes).toContain({path: '', component: HomeComponent, children:
    [
    {path:"products/:name", component: ProductDetailsComponent},
    {path: 'shop', component:ShopByCategoryComponent, canActivate:[AuthGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'retailers', component:RetailerDetailsComponent, canActivate:[SecureInnerPagesGuard]}
  ]});    
  });
});