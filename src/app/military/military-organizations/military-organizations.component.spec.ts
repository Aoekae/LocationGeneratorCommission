import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryOrganizationsComponent } from './military-organizations.component';

describe('MilitaryOrganizationsComponent', () => {
  let component: MilitaryOrganizationsComponent;
  let fixture: ComponentFixture<MilitaryOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
