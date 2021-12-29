import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorClasificadorComponent } from './administrador-clasificador.component';

describe('AdministradorClasificadorComponent', () => {
  let component: AdministradorClasificadorComponent;
  let fixture: ComponentFixture<AdministradorClasificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorClasificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorClasificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
