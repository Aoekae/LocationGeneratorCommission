import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalEventsComponent } from './political-events.component';

describe('PoliticalEventsComponent', () => {
  let component: PoliticalEventsComponent;
  let fixture: ComponentFixture<PoliticalEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
