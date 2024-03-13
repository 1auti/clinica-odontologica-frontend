import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOdontologosComponent } from './mostrar-odontologos.component';

describe('MostrarOdontologosComponent', () => {
  let component: MostrarOdontologosComponent;
  let fixture: ComponentFixture<MostrarOdontologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarOdontologosComponent]
    });
    fixture = TestBed.createComponent(MostrarOdontologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
