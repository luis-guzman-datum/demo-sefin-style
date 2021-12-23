import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthValidComponent } from './auth-valid.component';

describe('AuthValidComponent', () => {
  let component: AuthValidComponent;
  let fixture: ComponentFixture<AuthValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
