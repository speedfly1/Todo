import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';
import { SseServiceService } from 'src/app/service/sse-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: todo[] = [];

  constructor(private todoService: TodoService, private router: Router, private sseService: SseServiceService){}

  ngOnInit(): void {
    this.LoadTodoList();
    this.sseService.startListening();
  }

  LoadTodoList(){
    this.todoService.getTodos().subscribe((todo: todo[]) => {
      this.todoList = todo;
    })
  }

  ActionRequire(action: any, todoId: string, status: number): void{
    let actionId = action.value;
    switch(Number(actionId)){
      case 1: {
        this.router.navigate(['/edit', todoId]);
        break;
      }
      case 2: {
        this.todoService.deleteTodo(todoId).subscribe(() => {
          this.LoadTodoList();
        });
        break;
      }
      case 3:
        var newStatus = status?0:1;
        this.todoService.updateTodoStatus(todoId, newStatus).subscribe(() => {
          this.LoadTodoList();
        });
        break;
      default: {
        break;
      }
    }
  }

  addTodo(){
    this.router.navigate(['/add']);
  }
}
