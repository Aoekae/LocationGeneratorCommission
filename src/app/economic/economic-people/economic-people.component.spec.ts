import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicPeopleComponent } from './economic-people.component';

describe('EconomicPeopleComponent', () => {
  let component: EconomicPeopleComponent;
  let fixture: ComponentFixture<EconomicPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
