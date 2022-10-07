import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';

import './training_javascript'
import './training_typescript';
import { AccordionComponent } from './accordion/accordion.component';
import { PrincipaleComponent } from './principale/principale.component';
import { SubordinatoComponent } from './subordinato/subordinato.component';
import { ApplicaColoreDirective } from './applica-colore.directive';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { HomeComponent } from './home/home.component';
import { RiduciLunghezzaPipe } from './riduci-lunghezza.pipe';
import { FiltraArrayPipe } from './filtra-array.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout2Component } from './checkout2/checkout2.component';

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
    PaginaNonTrovataComponent,
    HomeComponent,
    RiduciLunghezzaPipe,
    FiltraArrayPipe,
    CheckoutComponent,
    Checkout2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
