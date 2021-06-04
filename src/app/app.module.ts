import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacBoardComponent } from './tic-tac-board/tic-tac-board.component';
import { TicTacSquaresComponent } from './tic-tac-squares/tic-tac-squares.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacBoardComponent,
    TicTacSquaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
