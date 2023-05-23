import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClacComponent } from './clac.component';

describe('ClacComponent', () => {
  let component: ClacComponent;
  let fixture: ComponentFixture<ClacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClacComponent]
    });
    fixture = TestBed.createComponent(ClacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
