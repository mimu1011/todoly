import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  todoInput = new FormControl('');

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.todos$ = this.storageService.todos$;
  }

  save() {
    const text = this.todoInput.value;
    if (!text) return;

    this.storageService.save(text);
    this.todoInput.reset();
  }

  changeCompleted(todo: Todo) {
    this.storageService.changeCompleted(todo.id, !todo.completed);
  }

  delete(todo: Todo) {
    this.storageService.delete(todo.id);
  }
}
