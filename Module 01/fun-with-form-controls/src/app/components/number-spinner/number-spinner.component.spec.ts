import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSpinnerComponent } from './number-spinner.component';

describe('NumberSpinnerComponent', () => {
  let component: NumberSpinnerComponent;
  let fixture: ComponentFixture<NumberSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberSpinnerComponent]
    });
    fixture = TestBed.createComponent(NumberSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
