import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsBoardComponent } from './friends-board.component';

describe('FriendsBoardComponent', () => {
  let component: FriendsBoardComponent;
  let fixture: ComponentFixture<FriendsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendsBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
