import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoneComponent } from '../persone/persone.component'

import './training_javascript'
import './training_typescript'
import {PersoneComponent} from '../persone/persone.component'
@NgModule({
  declarations: [
    AppComponent,
    PersoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
