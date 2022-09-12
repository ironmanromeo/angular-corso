import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {PersoneComponent} from '../persone/persone.component'
=======
import { PersoneComponent } from '../persone/persone.component'
>>>>>>> origin/main

import './training_javascript'
import './training_typescript'

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
