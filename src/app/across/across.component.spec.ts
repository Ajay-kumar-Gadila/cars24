import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrossComponent } from './across.component';

describe('AcrossComponent', () => {
  let component: AcrossComponent;
  let fixture: ComponentFixture<AcrossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcrossComponent]
    });
    fixture = TestBed.createComponent(AcrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
