import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  todosSubscription: Subscription;
  todoInput = new FormControl('');
  todos: Todo[] = [];

  isListView = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.todosSubscription = this.storageService.todos$.subscribe((todos) => (this.todos = todos));
  }

  ngOnDestroy(): void {
    this.todosSubscription?.unsubscribe();
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
