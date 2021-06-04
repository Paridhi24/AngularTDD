import { Component, 
   OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-board',
  templateUrl: './tic-tac-board.component.html',
  styleUrls: ['./tic-tac-board.component.scss']
})
export class TicTacBoardComponent implements OnInit{

squares:any[];
isXNext: boolean;
winnerPlayer: string;
tie: boolean;
canDraw:boolean;

ngOnInit(){
  this.newGame();
}

newGame(){
  this.squares = Array(9).fill(null);
  this.isXNext = true;
  this.winnerPlayer = null;
  this.tie = false;
  this.canDraw = false;
}

get player(){
  return this.isXNext ? 'X' :'0';
}

playTurn(index: number){
  if(!this.squares[index]){
    this.squares.splice(index,1,this.player);
    this.isXNext = !this.isXNext;    
  }  
  this.winnerPlayer = this.computeWinner(); 
}

computeWinner() {
  const lines= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    console.log(this.squares[a], this.squares[b], this.squares[c]);
    
    if(this.squares[a] && this.squares[a]===this.squares[b] && this.squares[a]===this.squares[c]){
      return this.squares[a];
    } else {
      if(!this.squares.includes(null)){
       this.tie = true
      } else {
        this.tie = false;
      }
     }
  }  
  return null;
} 

}


