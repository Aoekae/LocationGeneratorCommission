import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCapabilitiesComponent } from './information-capabilities.component';

describe('InformationCapabilitiesComponent', () => {
  let component: InformationCapabilitiesComponent;
  let fixture: ComponentFixture<InformationCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
