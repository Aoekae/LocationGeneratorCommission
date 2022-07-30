import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureStructuresComponent } from './infrastructure-structures.component';

describe('InfrastructureStructuresComponent', () => {
  let component: InfrastructureStructuresComponent;
  let fixture: ComponentFixture<InfrastructureStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
