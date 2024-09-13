import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { authCanActivateGuard } from '../guards/auth-can-activate.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ViewsComponent } from './views/views.component';
import { authCanActivateChildGuard } from '../guards/auth-can-activate-child.guard';
import { ManageBooksComponent } from './views/books/manage-books/manage-books.component';
import { CreateBookComponent } from './views/books/create-book/create-book.component';

export const routes: Routes = [
 {
    path: 'views',
    component: ViewsComponent,
    canActivate: [authCanActivateGuard],
    canActivateChild: [authCanActivateChildGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'books/manage',
        component: ManageBooksComponent,
      },
      {
        path: 'books/create',
        component: CreateBookComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];
