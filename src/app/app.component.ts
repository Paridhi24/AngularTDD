import { Component } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public input: any;
  public num: string='';
  public operate:string;
  public num2: string='';
  public result: number;
  public operators = ['+','-','*','/'];
  public isSecondNumber: boolean = false;
  

  pressNumbers(el: string){
    if((this.isSecondNumber === false)) {      
    this.num = this.num + el;
    } else {
      this.num2 = this.num2 + el;
    }
  }

  pressOperator(operator: string){    
    if(this.operators.includes(operator)) {
      this.isSecondNumber = true;
      this.operate = operator;  
    }
  }
 
  getResults(){
    switch(this.operate){
      case '+':
        this.result = Number(this.num) + Number(this.num2)
        return this.result;
        break;
      case '-':
        this.result = Number(this.num) - Number(this.num2)
        return this.result;
        break;
      case '*':
        this.result = Number(this.num) * Number(this.num2)
        return this.result;
        break;
      case '/':
        this.result = Number(this.num) / Number(this.num2)
        return this.result;
        break;  
    }
    
  }

  clearAll(){
    this.input = '';
    this.num = '';
    this.num2 = '';
    this.operate = '';
    this.result= null;
    this.isSecondNumber = false;
  }

}
