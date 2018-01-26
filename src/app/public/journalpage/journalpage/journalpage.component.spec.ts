import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalpageComponent } from './journalpage.component';

describe('JournalpageComponent', () => {
  let component: JournalpageComponent;
  let fixture: ComponentFixture<JournalpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
