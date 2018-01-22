import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalLatestComponent } from './journal-latest.component';

describe('JournalLatestComponent', () => {
  let component: JournalLatestComponent;
  let fixture: ComponentFixture<JournalLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
