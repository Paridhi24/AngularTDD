import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, from } from 'rxjs';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http service to get data', () => {
    let http = TestBed.get(HttpClient);
    let data = {
        
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
    let spy = spyOn(http, 'get').and.returnValue(from([data]));
    expect(service.getProducts()).toBeDefined();
  });
});
