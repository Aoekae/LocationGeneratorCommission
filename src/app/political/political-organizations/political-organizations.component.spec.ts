import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalOrganizationsComponent } from './political-organizations.component';

describe('PoliticalOrganizationsComponent', () => {
  let component: PoliticalOrganizationsComponent;
  let fixture: ComponentFixture<PoliticalOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
