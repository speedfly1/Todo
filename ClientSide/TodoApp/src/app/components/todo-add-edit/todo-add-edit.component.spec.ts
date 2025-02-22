import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddEditComponent } from './todo-add-edit.component';

describe('TodoAddEditComponent', () => {
  let component: TodoAddEditComponent;
  let fixture: ComponentFixture<TodoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddEditComponent]
    });
    fixture = TestBed.createComponent(TodoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
