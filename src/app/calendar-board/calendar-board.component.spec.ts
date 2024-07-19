import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBoardComponent } from './calendar-board.component';

describe('CalendarBoardComponent', () => {
  let component: CalendarBoardComponent;
  let fixture: ComponentFixture<CalendarBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
