import { Routes } from '@angular/router';
import { FinancialBoardComponent } from './financial-board/financial-board.component';
import { NotesBoardComponent } from './notes-board/notes-board.component';
import { CalendarBoardComponent } from './calendar-board/calendar-board.component';
import { FriendsBoardComponent } from './friends-board/friends-board.component';

export const routes: Routes = [
  {
    path: 'financces',
    component: FinancialBoardComponent,
  },
  {
    path: 'notes',
    component: NotesBoardComponent,
  },
  {
    path: 'calendar',
    component: CalendarBoardComponent,
  },
  {
    path: 'friends',
    component: FriendsBoardComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'financces',
  //   // pathMatch: 'full',
  // },
];
