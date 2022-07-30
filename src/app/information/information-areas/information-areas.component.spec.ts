import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAreasComponent } from './information-areas.component';

describe('InformationAreasComponent', () => {
  let component: InformationAreasComponent;
  let fixture: ComponentFixture<InformationAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
