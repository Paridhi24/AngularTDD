import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicTacBoardComponent } from '../tic-tac-board/tic-tac-board.component';

import { TicTacSquaresComponent } from './tic-tac-squares.component';

describe('TicTacSquaresComponent', () => {
  let component: TicTacSquaresComponent;
  let fixture: ComponentFixture<TicTacSquaresComponent>;
  let board: TicTacBoardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacSquaresComponent ],
      providers:[TicTacBoardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacSquaresComponent);
    component = fixture.componentInstance;
    board = TestBed.get(TicTacBoardComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
