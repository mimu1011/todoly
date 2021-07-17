import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  @Input() todos: Todo[];

  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() completed: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() colorChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  emitColorChange(todo: Todo, color: string) {
    todo.color = color;
    this.colorChanged.emit(todo);
  }
}
