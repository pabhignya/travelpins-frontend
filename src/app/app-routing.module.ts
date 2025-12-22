import { Routes } from '@angular/router';
import { provideRouter, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent } // HomeComponent placeholder
];

// Provide standalone router
export const appRoutingProviders = [];
export const AppRoutingModule = RouterModule.forRoot(routes);
