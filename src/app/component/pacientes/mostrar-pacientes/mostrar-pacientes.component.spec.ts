import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPacientesComponent } from './mostrar-pacientes.component';

describe('MostrarPacientesComponent', () => {
  let component: MostrarPacientesComponent;
  let fixture: ComponentFixture<MostrarPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPacientesComponent]
    });
    fixture = TestBed.createComponent(MostrarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
