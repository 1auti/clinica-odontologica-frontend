import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDiagnosticoComponent } from './editar-diagnostico.component';

describe('EditarDiagnosticoComponent', () => {
  let component: EditarDiagnosticoComponent;
  let fixture: ComponentFixture<EditarDiagnosticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDiagnosticoComponent]
    });
    fixture = TestBed.createComponent(EditarDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
