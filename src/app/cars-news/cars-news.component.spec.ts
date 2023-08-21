import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsNewsComponent } from './cars-news.component';

describe('CarsNewsComponent', () => {
  let component: CarsNewsComponent;
  let fixture: ComponentFixture<CarsNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsNewsComponent]
    });
    fixture = TestBed.createComponent(CarsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
