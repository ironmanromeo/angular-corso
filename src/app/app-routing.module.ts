import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"prodotti", component:ProdottiComponent},
  {path:"admin", component:AdminComponent},
  {path:"log-in", component:LoginComponent},
  {path:"prodotti/:slug", component:ProdottiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
