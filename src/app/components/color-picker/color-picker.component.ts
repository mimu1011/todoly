import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent {
  
  @Input()
  selectedColor: string;

  @Output()
  pickedColor: EventEmitter<string> = new EventEmitter();

  isActive = false;
  colors = [
    '#fff',
    '#a7ffeb',
    '#f28b82',
    '#fbbc04',
    '#fff475',
    '#ccff90',
    '#cbf0f8',
    '#aecbfa',
    '#d7aefb',
    '#fdcfe8',
    '#e6c9a8',
    '#e8eaed',
  ];

  constructor() {}

  openColorPicker() {
    this.isActive = true;
  }

  closeColorPicker() {
    this.isActive = false;
  }

  pick(color: string) {
    this.pickedColor.emit(color);
    this.closeColorPicker();
  }
}
