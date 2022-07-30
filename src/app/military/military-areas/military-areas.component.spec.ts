import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryAreasComponent } from './military-areas.component';

describe('MilitaryAreasComponent', () => {
  let component: MilitaryAreasComponent;
  let fixture: ComponentFixture<MilitaryAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
