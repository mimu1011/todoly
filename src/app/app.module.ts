import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ListViewComponent, CardViewComponent, ColorPickerComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
