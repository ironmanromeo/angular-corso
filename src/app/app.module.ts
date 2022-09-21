import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';

import './training_javascript'
import './training_typescript';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
