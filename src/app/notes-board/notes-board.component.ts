import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-board',
  standalone: true,
  imports: [],
  host: { class: 'board' },
  templateUrl: './notes-board.component.html',
  styleUrl: './notes-board.component.scss',
})
export class NotesBoardComponent {}
