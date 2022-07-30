import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalCapabilitiesComponent } from './political-capabilities.component';

describe('PoliticalCapabilitiesComponent', () => {
  let component: PoliticalCapabilitiesComponent;
  let fixture: ComponentFixture<PoliticalCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
