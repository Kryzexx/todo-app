import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleTodo } from '../todo.model';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingletaskComponent {
  // event emmiters and delete the task manager.
  @Input() todo!: SingleTodo;
  @Output() remove = new EventEmitter(); 

  deleteTask(value: any) {
    this.remove.emit(value)
  }
}
