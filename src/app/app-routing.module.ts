import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@/_guards';
import { HomeComponent } from '@/home';
import { LoginComponent } from '@/login';
import { RegisterComponent } from '@/register';
import { LogoutComponent } from '@/logout';

const routes: Routes = [
{
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
},
{
  path: 'register',
  component: RegisterComponent,
},
{
    path: 'login',
    component: LoginComponent,
},
{
  path: 'logout',
  component: LogoutComponent,
},
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
