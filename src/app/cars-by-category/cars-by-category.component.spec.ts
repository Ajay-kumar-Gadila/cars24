import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsByCategoryComponent } from './cars-by-category.component';

describe('CarsByCategoryComponent', () => {
  let component: CarsByCategoryComponent;
  let fixture: ComponentFixture<CarsByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsByCategoryComponent]
    });
    fixture = TestBed.createComponent(CarsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
