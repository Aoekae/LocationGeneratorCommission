import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOrganizationsComponent } from './information-organizations.component';

describe('InformationOrganizationsComponent', () => {
  let component: InformationOrganizationsComponent;
  let fixture: ComponentFixture<InformationOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
