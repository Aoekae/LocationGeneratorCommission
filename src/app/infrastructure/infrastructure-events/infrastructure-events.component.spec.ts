import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureEventsComponent } from './infrastructure-events.component';

describe('InfrastructureEventsComponent', () => {
  let component: InfrastructureEventsComponent;
  let fixture: ComponentFixture<InfrastructureEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
