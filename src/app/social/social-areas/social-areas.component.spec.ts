import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAreasComponent } from './social-areas.component';

describe('SocialAreasComponent', () => {
  let component: SocialAreasComponent;
  let fixture: ComponentFixture<SocialAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
