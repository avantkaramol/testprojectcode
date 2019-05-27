import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
	{path : '', component : UserLoginComponent},
	{path : 'home', component : HomeComponent, canActivate: [AuthGuardService]},
	{path : 'callback', component : CallbackComponent},
	{path: '404', component: NotFoundComponent},
	{path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
