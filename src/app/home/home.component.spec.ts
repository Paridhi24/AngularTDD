import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

class RouterStub{
  navigate(params:any){

  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ HomeComponent ],
      providers: [
        {provider: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the brand name', () => {
    let brandName = fixture.debugElement.query(By.css('.navbar-brand'));
    let element:HTMLElement = brandName.nativeElement;

    expect(element.innerText).toBe('Beyond');
  });

  it('should check the click event on clicking shopByCategory', () => {
    let shopButton = fixture.debugElement.query(By.css('#home'));
    shopButton.triggerEventHandler('click', null);

    expect(component.displayCategories()).toBeDefined;
  });
  
  it('should redirect the user to home page', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.displayCategories();
    expect(spy).toHaveBeenCalledWith(['shop']);
  });
});
