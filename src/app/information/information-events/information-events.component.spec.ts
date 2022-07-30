import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationEventsComponent } from './information-events.component';

describe('InformationEventsComponent', () => {
  let component: InformationEventsComponent;
  let fixture: ComponentFixture<InformationEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
