import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { authCanActivateGuard } from '../guards/auth-can-activate.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ViewsComponent } from './views/views.component';

export const routes: Routes = [
 {
    path: 'views',
    component: ViewsComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authCanActivateGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];
