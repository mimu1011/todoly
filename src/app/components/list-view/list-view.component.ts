import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  @Input() todos: Todo[];

  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() completed: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
}
