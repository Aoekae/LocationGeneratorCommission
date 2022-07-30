import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalAreasComponent } from './political-areas.component';

describe('PoliticalAreasComponent', () => {
  let component: PoliticalAreasComponent;
  let fixture: ComponentFixture<PoliticalAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
