import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNComponent } from './task-n.component';

describe('TaskNComponent', () => {
  let component: TaskNComponent;
  let fixture: ComponentFixture<TaskNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskNComponent]
    });
    fixture = TestBed.createComponent(TaskNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
