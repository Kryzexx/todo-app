import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-valueinput',
  templateUrl: './valueinput.component.html',
  styleUrls: ['./valueinput.component.css']
})
export class ValueinputComponent {
  @Output() newTask = new EventEmitter(); 
  addTask(inputvalue: any) {
    this.newTask.emit(inputvalue.value)    
  }
}
