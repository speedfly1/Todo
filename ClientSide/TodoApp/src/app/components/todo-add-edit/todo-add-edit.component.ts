import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add-edit',
  templateUrl: './todo-add-edit.component.html',
  styleUrls: ['./todo-add-edit.component.scss']
})
export class TodoAddEditComponent implements OnInit{
  private todoo!: todo;
  private routeSub!: Subscription;
  private todoId: string = "";
  form: FormGroup = this.fb.group({
    id: [{value:'', disabled: true}, Validators.required, ],
    name: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required],
  });

  constructor(private todoService: TodoService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if(!!params['id']){
        this.todoService.getTodo(params['id']).subscribe((todo: todo) => {
          this.todoId = todo._id;
          this.todoo = todo;
          this.form.setValue({
            id: this.todoo._id,
            name: this.todoo.name,
            description: this.todoo.description,
            status: this.todoo.status
          });
        })
      }
    });
  }

  save(){
    this.todoo = {
      id: this.todoId,
      _id: this.todoId,
      name:this.form.value.name,
      description:this.form.value.description,
      status:this.form.value.status
    }
    if(!this.todoId){
      this.todoService.saveTodo(this.todoo).subscribe((todoId) =>{
        this.router.navigate(['/edit', todoId.id])
      });
    }
    else{
      this.todoService.updateTodo(this.todoo).subscribe((todoId) =>{
        this.router.navigate(['/todolist']);
      });
    }

  }

}
