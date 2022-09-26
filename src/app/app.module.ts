import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'
import { PostComponent } from './post/post.component';

import './training_javascript'
import './training_typescript';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
