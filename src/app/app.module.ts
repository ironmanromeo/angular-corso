import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PrincipaleComponent } from './principale/principale.component';
import { SubordinatoComponent } from './subordinato/subordinato.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ApplicaColoreDirective } from './applica-colore.directive';

import './training_javascript'
import './training_typescript';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FormComponent,
    AccordionComponent,
    PrincipaleComponent,
    SubordinatoComponent,
    ApplicaColoreDirective,
    ProdottiComponent,
    ProdottoComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    PaginaNonTrovataComponent
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
