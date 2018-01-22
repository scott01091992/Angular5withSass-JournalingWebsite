import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRecentComponent } from './review-recent.component';

describe('ReviewRecentComponent', () => {
  let component: ReviewRecentComponent;
  let fixture: ComponentFixture<ReviewRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
