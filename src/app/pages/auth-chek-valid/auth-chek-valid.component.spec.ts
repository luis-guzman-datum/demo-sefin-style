import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChekValidComponent } from './auth-chek-valid.component';

describe('AuthChekValidComponent', () => {
  let component: AuthChekValidComponent;
  let fixture: ComponentFixture<AuthChekValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthChekValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthChekValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
