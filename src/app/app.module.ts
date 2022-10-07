import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'
import { PostComponent } from './post/post.component';

import './training_javascript'
import './training_typescript';
import { AccordionComponent } from './accordion/accordion.component';
import { ComponentePrincipaleComponent } from './componente-principale/componente-principale.component';
import { ComponenteSubordinatoComponent } from './componente-subordinato/componente-subordinato.component';
import { ApplicaColoreDirective } from './applica-colore.directive';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
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
    AccordionComponent,
    ComponentePrincipaleComponent,
    ComponenteSubordinatoComponent,
    ApplicaColoreDirective,
    ProdottiComponent,
    ProdottoComponent,
    LoginComponent,
    AdminComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
