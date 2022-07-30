import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureCapabilitiesComponent } from './infrastructure-capabilities.component';

describe('InfrastructureCapabilitiesComponent', () => {
  let component: InfrastructureCapabilitiesComponent;
  let fixture: ComponentFixture<InfrastructureCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
