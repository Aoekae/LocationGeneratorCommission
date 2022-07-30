import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicStructuresComponent } from './economic-structures.component';

describe('EconomicStructuresComponent', () => {
  let component: EconomicStructuresComponent;
  let fixture: ComponentFixture<EconomicStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
