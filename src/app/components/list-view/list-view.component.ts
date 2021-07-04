import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input() todos$: Observable<Todo[]>;

  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() complete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
