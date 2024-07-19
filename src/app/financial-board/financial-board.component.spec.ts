import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialBoardComponent } from './financial-board.component';

describe('FinancialBoardComponent', () => {
  let component: FinancialBoardComponent;
  let fixture: ComponentFixture<FinancialBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
