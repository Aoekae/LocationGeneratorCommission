import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicAreasComponent } from './economic-areas.component';

describe('EconomicAreasComponent', () => {
  let component: EconomicAreasComponent;
  let fixture: ComponentFixture<EconomicAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
