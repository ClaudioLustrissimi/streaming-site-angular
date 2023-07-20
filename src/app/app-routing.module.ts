import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SinglemovieComponent } from './singlemovie/singlemovie.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'singlemovie/:id', component: SinglemovieComponent, canActivate: [AuthGuard] },
  {path: 'searchmovie', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrati', component: RegistrationComponent},
  {path: 'carrello', component: CartComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
