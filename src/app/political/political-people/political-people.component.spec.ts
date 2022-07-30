import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalPeopleComponent } from './political-people.component';

describe('PoliticalPeopleComponent', () => {
  let component: PoliticalPeopleComponent;
  let fixture: ComponentFixture<PoliticalPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
