import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;
//   let mockRouter = {
// 	navigate: jasmine.createSpy('navigate')
// }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, ShopByCategoryComponent, ProductDetailsComponent],
    //   providers: [
	// 	{ provide: Router, useValue: mockRouter.navigate},
	// ]
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

  it('navigate to "shop by category" takes you to /shop', fakeAsync(() => {
    router.navigate(["shop"]).then(() => {
      expect(location.path()).toBe("/shop");
    });
  }));
});