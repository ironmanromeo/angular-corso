import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "prodotti", component: ProdottiComponent},
  {path: "admin", component: AdminComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent, canActivate: [AuthGuardService]},
  {path: "checkOut", component: CheckOutComponent},
  {path: "prodotti/:slug", component: ProdottoComponent},
  {path: "page-not-found", component: PaginaNonTrovataComponent},
  {path: "**", redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
