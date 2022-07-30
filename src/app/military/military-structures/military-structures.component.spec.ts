import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryStructuresComponent } from './military-structures.component';

describe('MilitaryStructuresComponent', () => {
  let component: MilitaryStructuresComponent;
  let fixture: ComponentFixture<MilitaryStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
