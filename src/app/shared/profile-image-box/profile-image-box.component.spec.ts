import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageBoxComponent } from './profile-image-box.component';

describe('ProfileImageBoxComponent', () => {
  let component: ProfileImageBoxComponent;
  let fixture: ComponentFixture<ProfileImageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
