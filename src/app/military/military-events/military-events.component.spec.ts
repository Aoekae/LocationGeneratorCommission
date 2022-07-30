import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryEventsComponent } from './military-events.component';

describe('MilitaryEventsComponent', () => {
  let component: MilitaryEventsComponent;
  let fixture: ComponentFixture<MilitaryEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
