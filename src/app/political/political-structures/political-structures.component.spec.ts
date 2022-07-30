import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalStructuresComponent } from './political-structures.component';

describe('PoliticalStructuresComponent', () => {
  let component: PoliticalStructuresComponent;
  let fixture: ComponentFixture<PoliticalStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
