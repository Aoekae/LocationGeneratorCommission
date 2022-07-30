import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructurePeopleComponent } from './infrastructure-people.component';

describe('InfrastructurePeopleComponent', () => {
  let component: InfrastructurePeopleComponent;
  let fixture: ComponentFixture<InfrastructurePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructurePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructurePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
