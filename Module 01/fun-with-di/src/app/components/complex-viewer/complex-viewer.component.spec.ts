import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexViewerComponent } from './complex-viewer.component';

describe('ComplexViewerComponent', () => {
  let component: ComplexViewerComponent;
  let fixture: ComponentFixture<ComplexViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexViewerComponent]
    });
    fixture = TestBed.createComponent(ComplexViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
