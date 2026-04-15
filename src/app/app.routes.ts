import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { Login } from './core/login/login';
import { Signup } from './core/signup/signup';
import { Admin} from './admin/admin';
import { ProductForm } from './product-form/product-form';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'login', component: Login},
  {path: 'home', component: HomeComponent},
  { path: 'signup', component: Signup },
   { path: 'admin/products', component: Admin },
  { path: 'admin/products/new', component: ProductForm },
  { path: 'admin/products/edit/:id', component: ProductForm },
  { path: '**', redirectTo: '' }
];
