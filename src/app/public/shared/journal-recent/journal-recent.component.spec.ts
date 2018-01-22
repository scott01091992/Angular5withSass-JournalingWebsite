import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalRecentComponent } from './journal-recent.component';

describe('JournalRecentComponent', () => {
  let component: JournalRecentComponent;
  let fixture: ComponentFixture<JournalRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
