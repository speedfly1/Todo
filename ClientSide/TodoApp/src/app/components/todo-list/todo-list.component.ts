import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: todo[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todo: todo[]) => {
      this.todoList = todo;
      console.log(todo);
    })
  }
}
