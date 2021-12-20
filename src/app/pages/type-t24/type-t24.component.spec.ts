import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeT24Component } from './type-t24.component';

describe('TypeT24Component', () => {
  let component: TypeT24Component;
  let fixture: ComponentFixture<TypeT24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeT24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeT24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
