import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPeopleComponent } from './social-people.component';

describe('SocialPeopleComponent', () => {
  let component: SocialPeopleComponent;
  let fixture: ComponentFixture<SocialPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
