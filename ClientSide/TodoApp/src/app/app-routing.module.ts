import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddEditComponent } from './components/todo-add-edit/todo-add-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/todolist' , pathMatch: 'full'},
  {path: "todolist", component: TodoListComponent},
  {path: "add", component: TodoAddEditComponent},
  {path: "edit/:id", component: TodoAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
