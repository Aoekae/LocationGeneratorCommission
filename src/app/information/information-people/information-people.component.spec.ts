import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPeopleComponent } from './information-people.component';

describe('InformationPeopleComponent', () => {
  let component: InformationPeopleComponent;
  let fixture: ComponentFixture<InformationPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
