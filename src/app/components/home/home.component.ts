import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  todoInput = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  add() {
    if (!this.todoInput.value) return;

    this.todos.push({
      text: this.todoInput.value,
      createdAt: new Date(),
    });

    this.todoInput.reset();
  }
}
