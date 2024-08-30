import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensecardComponent } from './expensecard.component';

describe('ExpensecardComponent', () => {
  let component: ExpensecardComponent;
  let fixture: ComponentFixture<ExpensecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
