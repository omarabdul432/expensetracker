import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesformComponent } from './expensesform.component';

describe('ExpensesformComponent', () => {
  let component: ExpensesformComponent;
  let fixture: ComponentFixture<ExpensesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
