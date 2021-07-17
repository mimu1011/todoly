import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('stickyHeader') stickyHeaderRef: ElementRef;
  scrollEventSubscription: Subscription;
  todosSubscription: Subscription;

  todoInput = new FormControl('');

  todos: Todo[] = [];

  isListView = false;
  isSticky = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.todosSubscription = this.storageService.todos$.subscribe((todos) => (this.todos = todos));

    this.scrollEventSubscription = fromEvent(window, 'scroll').subscribe((_) => this.checkIsSticky());
  }

  ngOnDestroy(): void {
    this.todosSubscription?.unsubscribe();
    this.scrollEventSubscription?.unsubscribe();
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

  saveColor(todo: Todo) {
    this.storageService.changeColor(todo.id, todo.color);
  }


  private checkIsSticky() {
    const topPosition = this.stickyHeaderRef.nativeElement.getBoundingClientRect().top;

    if (topPosition < 10) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
