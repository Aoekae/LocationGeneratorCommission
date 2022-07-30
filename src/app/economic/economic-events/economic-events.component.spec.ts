import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicEventsComponent } from './economic-events.component';

describe('EconomicEventsComponent', () => {
  let component: EconomicEventsComponent;
  let fixture: ComponentFixture<EconomicEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
