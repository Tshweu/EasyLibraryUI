import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { authCanActivateGuard } from '../guards/auth-can-activate.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ViewsComponent } from './views/views.component';
import { authCanActivateChildGuard } from '../guards/auth-can-activate-child.guard';
import { ManageBooksComponent } from './views/books/manage-books/manage-books.component';

export const routes: Routes = [
 {
    path: 'views',
    component: ViewsComponent,
    canActivateChild: [authCanActivateChildGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authCanActivateGuard],
      },
      {
        path: 'books/manage',
        component: ManageBooksComponent,
        canActivate: [authCanActivateGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];
