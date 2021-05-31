import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

import { SecureInnerPagesGuard } from './secure-inner-pages.guard';

describe('SecureInnerPagesGuard', () => {
  let guard: SecureInnerPagesGuard;
  let service: AuthService;
  let routerMock ={navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[
        {provide:Router, useValue: routerMock}
      ]
    });
    guard = TestBed.inject(SecureInnerPagesGuard);
    service = TestBed.inject(AuthService)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not navigate to retailers page if user is logged in', () => {
    spyOn(service, 'loggedIn').and.returnValue(true);    
    expect(guard.canActivate()).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['']);
   });

   it('should navigate to retailers page ', () => {
    spyOn(service, 'loggedIn').and.returnValue(false);    
    expect(guard.canActivate()).toEqual(true);
   });

});
