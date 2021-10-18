import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabBarComponent } from './user-tab-bar.component';

describe('UserTabBarComponent', () => {
  let component: UserTabBarComponent;
  let fixture: ComponentFixture<UserTabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTabBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
