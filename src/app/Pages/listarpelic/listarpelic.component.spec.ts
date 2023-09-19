import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpelicComponent } from './listarpelic.component';

describe('ListarpelicComponent', () => {
  let component: ListarpelicComponent;
  let fixture: ComponentFixture<ListarpelicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarpelicComponent]
    });
    fixture = TestBed.createComponent(ListarpelicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
