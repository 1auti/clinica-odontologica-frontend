import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaOdontologosComponent } from './alta-odontologos.component';

describe('AltaOdontologosComponent', () => {
  let component: AltaOdontologosComponent;
  let fixture: ComponentFixture<AltaOdontologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaOdontologosComponent]
    });
    fixture = TestBed.createComponent(AltaOdontologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
