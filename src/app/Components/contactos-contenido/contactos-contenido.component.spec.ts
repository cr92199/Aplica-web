import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosContenidoComponent } from './contactos-contenido.component';

describe('ContactosContenidoComponent', () => {
  let component: ContactosContenidoComponent;
  let fixture: ComponentFixture<ContactosContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactosContenidoComponent]
    });
    fixture = TestBed.createComponent(ContactosContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
