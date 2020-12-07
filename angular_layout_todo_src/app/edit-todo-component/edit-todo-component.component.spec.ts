import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoComponentComponent } from './edit-todo-component.component';

describe('EditTodoComponentComponent', () => {
  let component: EditTodoComponentComponent;
  let fixture: ComponentFixture<EditTodoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
