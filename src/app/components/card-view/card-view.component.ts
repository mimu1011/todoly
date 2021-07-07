import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  @Input() todos: Todo[];

  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() completed: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
}
