import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureAreasComponent } from './infrastructure-areas.component';

describe('InfrastructureAreasComponent', () => {
  let component: InfrastructureAreasComponent;
  let fixture: ComponentFixture<InfrastructureAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
