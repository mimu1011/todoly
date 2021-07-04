import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  @Input() todos$: Observable<Todo[]>;

  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() complete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
