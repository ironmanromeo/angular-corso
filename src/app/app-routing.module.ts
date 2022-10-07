import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"prodotti", component:ProdottiComponent},
  {path:"admin", component:AdminComponent, canActivate: [AuthGuardService]},
  {path:"log-in", component:LoginComponent},
  {path:"prodotti/:slug", component:ProdottoComponent},
  {path:"pagina-non-trovata", component: PaginaNonTrovataComponent},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
