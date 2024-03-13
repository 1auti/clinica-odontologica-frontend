import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPacienteComponent } from './detalles-paciente.component';

describe('DetallesPacienteComponent', () => {
  let component: DetallesPacienteComponent;
  let fixture: ComponentFixture<DetallesPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPacienteComponent]
    });
    fixture = TestBed.createComponent(DetallesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
