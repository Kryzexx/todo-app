import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SingletaskComponent } from './singletask/singletask.component';
import { ValueinputComponent } from './valueinput/valueinput.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SingletaskComponent,
    ValueinputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
