import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCapabilitiesComponent } from './social-capabilities.component';

describe('SocialCapabilitiesComponent', () => {
  let component: SocialCapabilitiesComponent;
  let fixture: ComponentFixture<SocialCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
