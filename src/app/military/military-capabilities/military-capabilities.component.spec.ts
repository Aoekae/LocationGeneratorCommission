import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryCapabilitiesComponent } from './military-capabilities.component';

describe('MilitaryCapabilitiesComponent', () => {
  let component: MilitaryCapabilitiesComponent;
  let fixture: ComponentFixture<MilitaryCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
