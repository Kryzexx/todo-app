import { Component } from '@angular/core';
import { SingleTodo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // todo default array.
  toDos: SingleTodo[] = [
    {
      description: "Default Task",
      done: false
    }
  ]
  // add and delete the tasks.
  onAddTask(value: any) {
    this.toDos.unshift({
      description: value,
      done: false
    })
  }
  onRemoveTask(value: any) {
    this.toDos.splice(value,1)
  }
}
