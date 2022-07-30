import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStructuresComponent } from './social-structures.component';

describe('SocialStructuresComponent', () => {
  let component: SocialStructuresComponent;
  let fixture: ComponentFixture<SocialStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
