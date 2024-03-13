import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesOdontologosComponent } from './detalles-odontologos.component';

describe('DetallesOdontologosComponent', () => {
  let component: DetallesOdontologosComponent;
  let fixture: ComponentFixture<DetallesOdontologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesOdontologosComponent]
    });
    fixture = TestBed.createComponent(DetallesOdontologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
