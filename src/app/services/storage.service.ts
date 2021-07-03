import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';
import { v4 as uuid4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly todosStorageKey = 'TODOS';

  todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  constructor() {
    this.load();
  }

  load(): void {
    const todos = this.getTodosFromLocalStorage();
    this.todosSubject$.next(todos);
  }

  save(text: string): void {
    const todos = this.todosSubject$.getValue();
    const created = this.createTodo(text);
    todos.unshift(created);

    this.saveTodosToLocalStorage(todos);
    this.todosSubject$.next(todos);
  }

  delete(id: string): void {
    const todos = this.todosSubject$
      .getValue()
      .filter((item) => item.id !== id);

    this.saveTodosToLocalStorage(todos);
    this.todosSubject$.next(todos);
  }

  changeCompleted(id: string, isCompleted: boolean): void {
    const todos = this.todosSubject$.getValue();

    const toComplete = todos.find((item) => item.id === id);

    if (!toComplete) return;

    toComplete.completed = isCompleted;

    this.saveTodosToLocalStorage(todos);
    this.todosSubject$.next(todos);
  }

  private createTodo(text: string): Todo {
    return <Todo>{
      id: uuid4(),
      text: text,
      createdAt: new Date(),
    };
  }

  private saveTodosToLocalStorage(todos: Todo[]) {
    localStorage.setItem(this.todosStorageKey, JSON.stringify(todos));
  }

  private getTodosFromLocalStorage(): Todo[] {
    const storageValue = localStorage.getItem(this.todosStorageKey);
    if (!storageValue) return [];
    return JSON.parse(storageValue);
  }
}
