import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { Login } from './core/login/login';
import { Signup } from './core/signup/signup';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'login', component: Login},
  {path: 'home', component: HomeComponent},
  { path: 'signup', component: Signup },
  { path: '**', redirectTo: '' }
];
