import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    console.log(todo);
    return this.http.post<any>("http://localhost:3000/todo",todo);
  }

  updateTodo(todo: todo){
    console.log(todo);
    return this.http.patch<boolean>("http://localhost:3000/todo",todo);
  }
}
