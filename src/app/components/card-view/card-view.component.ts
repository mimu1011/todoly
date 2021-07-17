import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
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
