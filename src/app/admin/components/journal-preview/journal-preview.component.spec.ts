import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalPreviewComponent } from './journal-Preview.component';

describe('JournalPreviewComponent', () => {
  let component: JournalPreviewComponent;
  let fixture: ComponentFixture<JournalPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
