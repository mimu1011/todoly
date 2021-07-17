import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent {
  isActive = false;

  colors = ['#D32F2F', '#0288D1', '#00796B', '#689F38', '#AFB42B', '#FFA000', '#FFFFFF'];

  @Output()
  pickedColor: EventEmitter<string> = new EventEmitter();

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
