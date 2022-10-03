import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdottiComponent } from './prodotti/prodotti.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"prodotti/", component:ProdottiComponent},
  {path:"prodotti/:slug", component:ProdottiComponent},
  {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
