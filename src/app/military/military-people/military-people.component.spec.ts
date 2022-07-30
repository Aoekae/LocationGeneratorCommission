import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryPeopleComponent } from './military-people.component';

describe('MilitaryPeopleComponent', () => {
  let component: MilitaryPeopleComponent;
  let fixture: ComponentFixture<MilitaryPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
