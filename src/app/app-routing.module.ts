import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout2Component } from './checkout2/checkout2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { Posts2Component } from './posts2/posts2.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"prodotti", component:ProdottiComponent},
  {path:"admin", component:AdminComponent, canActivate: [AuthGuardService]},
  {path:"log-in", component:LoginComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"checkout2", component:Checkout2Component},
  {path:"posts", component:Posts2Component},
  {path:"prodotti/:slug", component:ProdottoComponent},
  {path:"pagina-non-trovata", component: PaginaNonTrovataComponent},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
