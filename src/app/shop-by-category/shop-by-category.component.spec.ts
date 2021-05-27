import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, from } from 'rxjs';
import { ProductsService } from '../products.service';

import { ShopByCategoryComponent } from './shop-by-category.component';

describe('ShopByCategoryComponent', () => {
  let component: ShopByCategoryComponent;
  let fixture: ComponentFixture<ShopByCategoryComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ShopByCategoryComponent ],
      providers:[ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopByCategoryComponent);
    component = fixture.componentInstance;
  }); 

  it('should have table headings as Grocery', () => {
    
    let heading = fixture.debugElement.query(By.css('.data-space'));
    let element: HTMLElement= heading.nativeElement;

    expect(element.innerText).toBe("Grocery");
  });

  it('should load categories from server', () => {
    //let service = TestBed.get(ProductsService);
    let service = fixture.debugElement.injector.get(ProductsService);
    spyOn(service, 'getProducts').and.returnValue(from([ [ 1,2,3 ] ]));
    fixture.detectChanges();
    expect(component.response.length).toBe(3);
  });
});
