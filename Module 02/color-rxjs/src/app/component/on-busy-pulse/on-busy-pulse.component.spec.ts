import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBusyPulseComponent } from './on-busy-pulse.component';

describe('OnBusyPulseComponent', () => {
  let component: OnBusyPulseComponent;
  let fixture: ComponentFixture<OnBusyPulseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnBusyPulseComponent]
    });
    fixture = TestBed.createComponent(OnBusyPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
