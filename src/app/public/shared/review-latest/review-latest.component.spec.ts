import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLatestComponent } from './review-latest.component';

describe('ReviewLatestComponent', () => {
  let component: ReviewLatestComponent;
  let fixture: ComponentFixture<ReviewLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
