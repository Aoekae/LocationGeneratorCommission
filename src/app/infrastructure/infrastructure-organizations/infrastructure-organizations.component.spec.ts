import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureOrganizationsComponent } from './infrastructure-organizations.component';

describe('InfrastructureOrganizationsComponent', () => {
  let component: InfrastructureOrganizationsComponent;
  let fixture: ComponentFixture<InfrastructureOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
