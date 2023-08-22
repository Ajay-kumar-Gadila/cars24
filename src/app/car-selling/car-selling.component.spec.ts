import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSellingComponent } from './car-selling.component';

describe('CarSellingComponent', () => {
  let component: CarSellingComponent;
  let fixture: ComponentFixture<CarSellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSellingComponent]
    });
    fixture = TestBed.createComponent(CarSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
