import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationStructuresComponent } from './information-structures.component';

describe('InformationStructuresComponent', () => {
  let component: InformationStructuresComponent;
  let fixture: ComponentFixture<InformationStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
