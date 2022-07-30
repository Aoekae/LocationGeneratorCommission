import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicOrganizationsComponent } from './economic-organizations.component';

describe('EconomicOrganizationsComponent', () => {
  let component: EconomicOrganizationsComponent;
  let fixture: ComponentFixture<EconomicOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
