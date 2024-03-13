import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesOdontologosComponent } from './especialidades-odontologos.component';

describe('EspecialidadesOdontologosComponent', () => {
  let component: EspecialidadesOdontologosComponent;
  let fixture: ComponentFixture<EspecialidadesOdontologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesOdontologosComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesOdontologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
