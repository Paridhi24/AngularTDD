import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, from } from 'rxjs';
import { ProductsService } from '../products.service';

import { ShopByCategoryComponent } from './shop-by-category.component';

class RouterStub{
  navigate(){

  }
}

describe('ShopByCategoryComponent', () => {
  let component: ShopByCategoryComponent;
  let fixture: ComponentFixture<ShopByCategoryComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ShopByCategoryComponent ],
      providers:[ProductsService,
      {provider:Router, useClass:RouterStub}
      ]
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
    let service = fixture.debugElement.injector.get(ProductsService);
    let products = spyOn(service, 'getProducts').and.returnValue(from([ [ 1,2,3 ] ]));
    fixture.detectChanges();
    expect(products).not.toBe(undefined);
  });

  it('should load categories from server', () => {
    let service = fixture.debugElement.injector.get(ProductsService);
    let mockData = 
    {
        
            "groceries": [{
                "id": 1,  
                "name": "Bread",  
                "description": "white and brown available",
                "price": 20  
            },
            {
                "id": 2,  
                "name": "Pasta",  
                "description": "all types available",
                "price": 80  
            },
            {
                "id": 3,  
                "name": "Frozen-Foods",  
                "description": "all types available",
                "price": 500  
            },{
                "id": 4,  
                "name": "Dairy-Items",  
                "description": "all are available",
                "price": 20  
            }],
            "electronics": [{
                "id": 1,  
                "name": "Earphones",  
                "description": "Boat all variety",
                "price": 2000  
            },
            {
                "id": 2,  
                "name": "Headphones",  
                "description": "Philips all variety",
                "price": 2500 
            },
            {
                "id": 3,  
                "name": "Selfie-stick",  
                "description": "all types available",
                "price": 500  
            },
            {
                "id": 4,  
                "name": "Mobiles",  
                "description": "all are available",
                "price": 20000 
            }],
            "apparels": [{
                "id": 1,  
                "name": "Women-Apparels",  
                "description": "white and brown available",
                "price": 2000  
            },
            {
                "id": 2,  
                "name": "Men-Apparels",  
                "description": "all types available",
                "price": 1000  
            },
            {
                "id": 3,  
                "name": "Kids-Apparels",  
                "description": "all types available",
                "price": 800  
            }]
        }
    let products = spyOn(service, 'getProducts').and.returnValue(from([mockData]));
    fixture.detectChanges();
    expect(products).toHaveBeenCalled();
  });

  it('should load categories from server', () => {
    let service = fixture.debugElement.injector.get(ProductsService);       
    spyOn(service, 'getProducts').and.returnValue(from([ [ 1,2,3 ] ]));
    fixture.detectChanges();
    expect(component.response.length).toBe(3);
  });

  it('should should redirect to products/:name', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.onClickingGroceryItems('name');
    expect(spy).toHaveBeenCalledWith(['products', 'name']);
  });

  it('should redirect to /retailers', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.showDetails();
    expect(spy).toHaveBeenCalledWith(['retailers']);
  });
});
