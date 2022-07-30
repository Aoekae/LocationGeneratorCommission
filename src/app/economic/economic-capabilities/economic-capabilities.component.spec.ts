import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicCapabilitiesComponent } from './economic-capabilities.component';

describe('EconomicCapabilitiesComponent', () => {
  let component: EconomicCapabilitiesComponent;
  let fixture: ComponentFixture<EconomicCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
