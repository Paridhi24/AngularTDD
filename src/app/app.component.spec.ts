import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('AppComponent', () => {

  let app : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let operators = ['+','-','*','/'];
  let isSecondNumber: boolean = false;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    
  });

  beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
  }); 

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have heading as Calculator`, () => {
    let el = fixture.debugElement.query(By.css('.text-center'))
    let heading = el.nativeElement;
    expect(heading.innerText).toBe('Calculator');
  });

  it(`should take input1 on pressing any button `, () => {
    let el = fixture.debugElement.query(By.css('#num7'));
    let number = el.nativeElement;
    el.triggerEventHandler('click', number.innerText);
    expect(app.num).toBe('7');
  });

  it(`should take operator on pressing any of the operators `, () => {
    let el = fixture.debugElement.query(By.css('#operator'));
    let operator = el.nativeElement;
    el.triggerEventHandler('click', operator.innerText);
    expect(app.operate).toBe('/');
  });

  it(`should take multiple operators on pressing any of the operators `, () => {
    let el = fixture.debugElement.query(By.css('#operator'));
    let operator = el.nativeElement;
    app.num = '77';
    app.operate = '+';
    app.num2 = '10';
    fixture.detectChanges();
    expect(app.num2.length).not.toBe(0);
    el.triggerEventHandler('click', operator.innerText);
    app.num = String(app.getResults());
    app.num2 = '';
    expect(app.operate).toBe('/');
  });

  it(`should take input2 on pressing any of the numbers `, () => {
    let el = fixture.debugElement.query(By.css('#num7'));
    let number = el.nativeElement;
    app.isSecondNumber = true;
    el.triggerEventHandler('click', number.innerText);
    fixture.detectChanges();
    expect(app.num2).toBe('7');
  });

  it(`should give results on addition and then pressing = in calculator `, () => {
    let el = fixture.debugElement.query(By.css('#result'));
    let result = el.nativeElement;
    app.num = '77';
    app.operate = '+';
    app.num2 = '10';
    el.triggerEventHandler('click', result.innerText);
    fixture.detectChanges
    expect(app.getResults()).toBe(87);
  });

  it(`should give results on subtraction and then pressing = in calculator `, () => {
    let el = fixture.debugElement.query(By.css('#result'));
    let result = el.nativeElement;
    app.num = '77';
    app.operate = '-';
    app.num2 = '10';
    el.triggerEventHandler('click', result.innerText);
    fixture.detectChanges
    expect(app.getResults()).toBe(67);
  });

  it(`should give results on multiplication and then pressing = in calculator `, () => {
    let el = fixture.debugElement.query(By.css('#result'));
    let result = el.nativeElement;
    app.num = '77';
    app.operate = '*';
    app.num2 = '10';
    el.triggerEventHandler('click', result.innerText);
    fixture.detectChanges
    expect(app.getResults()).toBe(770);
  });

  it(`should give results on division and then pressing = in calculator `, () => {
    let el = fixture.debugElement.query(By.css('#result'));
    let result = el.nativeElement;
    app.num = '77';
    app.operate = '/';
    app.num2 = '10';
    el.triggerEventHandler('click', result.innerText);
    fixture.detectChanges
    expect(app.getResults()).toBe(7.7);
  });

  it(`should clear input and output on pressing AC`, () => {
    let el = fixture.debugElement.query(By.css('#clear'));
    let clearOption = el.nativeElement;
    app.num = '';
    app.operate = '';
    app.num2 = '';
    app.result = null;
    app.isSecondNumber = false;
    el.triggerEventHandler('click', clearOption.innerText);
    fixture.detectChanges
    expect(app.result).toBe(null);
  });

});
