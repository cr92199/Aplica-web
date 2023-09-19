import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContAzarComponent } from './cont-azar.component';

describe('ContAzarComponent', () => {
  let component: ContAzarComponent;
  let fixture: ComponentFixture<ContAzarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContAzarComponent]
    });
    fixture = TestBed.createComponent(ContAzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
