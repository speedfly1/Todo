import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http: HttpClient) { }

  getTodos(): Observable<todo[]> {
    return this.http.get<todo[]>("http://localhost:3000/todos");
  }

  getTodo(id: string): Observable<todo> {
    return this.http.get<todo>(`http://localhost:3000/todo/${id}`);
  }

  saveTodo(todo: todo){
    return this.http.post<any>("http://localhost:3000/todo",todo);
  }

  updateTodo(todo: todo){
    return this.http.put<boolean>("http://localhost:3000/todo",todo);
  }

  updateTodoStatus(id: string, status: number){
    return this.http.patch<boolean>("http://localhost:3000/todo",{id:id, status:status});
  }

  deleteTodo(todoId: string){
    console.log(todoId);
    return this.http.delete(`http://localhost:3000/todo/${todoId}`);
  }
}
