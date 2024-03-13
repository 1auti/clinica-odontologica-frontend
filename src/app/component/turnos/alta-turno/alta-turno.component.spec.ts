import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTurnoComponent } from './alta-turno.component';

describe('AltaTurnoComponent', () => {
  let component: AltaTurnoComponent;
  let fixture: ComponentFixture<AltaTurnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaTurnoComponent]
    });
    fixture = TestBed.createComponent(AltaTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
