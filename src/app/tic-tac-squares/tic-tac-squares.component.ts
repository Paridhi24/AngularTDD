import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tic-tac-squares',
  templateUrl: './tic-tac-squares.component.html',
  styleUrls: ['./tic-tac-squares.component.scss']
})
export class TicTacSquaresComponent {
  @Input() 
  value = 'X' || '0';
}
