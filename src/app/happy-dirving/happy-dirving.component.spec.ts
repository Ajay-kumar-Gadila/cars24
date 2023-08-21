import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyDirvingComponent } from './happy-dirving.component';

describe('HappyDirvingComponent', () => {
  let component: HappyDirvingComponent;
  let fixture: ComponentFixture<HappyDirvingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyDirvingComponent]
    });
    fixture = TestBed.createComponent(HappyDirvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
