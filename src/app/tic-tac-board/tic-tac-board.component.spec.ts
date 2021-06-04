import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { TicTacSquaresComponent } from '../tic-tac-squares/tic-tac-squares.component';
import { TicTacBoardComponent } from './tic-tac-board.component';

describe('TicTacBoardComponent', () => {
  let component: TicTacBoardComponent;
  let fixture: ComponentFixture<TicTacBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacBoardComponent, TicTacSquaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start a new game on clicking Newgame button', () => {
    let button = fixture.debugElement.query(By.css('.game-button'));
    button.triggerEventHandler('click', null);
    expect(component.newGame).toBeDefined();
  });

  it('should play next turn on clicking square', () => {
    let button = fixture.debugElement.query(By.css('app-tic-tac-squares'));
    let spy = spyOn(component,'playTurn').and.returnValue();
    button.triggerEventHandler('click', 1);
    fixture.detectChanges();   
    expect(spy).toHaveBeenCalled();
  });

  it('next player should be 0', () => {
    component.squares[0]='X';
    component.squares[1]='0';
    component.squares[2]='X'
    let button = fixture.debugElement.query(By.css('app-tic-tac-squares'));
    button.triggerEventHandler('click', 3);
    fixture.detectChanges();    
    component.playTurn(3);   
    console.log(component.squares);  
    expect(component.player).toBe('0');
  });

  it('on playing next turn isXNext should toggle', () => {
    component.isXNext = true
    let button = fixture.debugElement.query(By.css('app-tic-tac-squares'));
    button.triggerEventHandler('click', 1);
    fixture.detectChanges();   
    expect(component.isXNext).toBe(false);
  });

  it('checking tie condition', () => {
    component.squares[0] = 'X';
    component.squares[2] = 'X';
    component.squares[3] = 'X';
    component.squares[4] = 'X'
    component.squares[7] = 'X'
    component.squares[1] = '0'
    component.squares[5] = '0'
    component.squares[6] = '0'
    component.squares[8] = '0'
    fixture.detectChanges(); 
    component.computeWinner();    
    expect(component.tie).toBe(true);
  });

  it('checking winner to be X condition', () => {
    component.squares[0] = 'X';    
    component.squares[1] = 'X'
    component.squares[2] = 'X';
    component.squares[3] = '0';
    component.squares[4] = '0'    
    component.squares[5] = 'X'    
    component.squares[6] = '0'
    component.squares[7] = 'X'
    component.squares[8] = '0'
    let button = fixture.debugElement.query(By.css('app-tic-tac-squares'));
    button.triggerEventHandler('click', 1);
    fixture.detectChanges(); 
    component.computeWinner();    
    expect(component.winnerPlayer).toBe('X');
  });
});
