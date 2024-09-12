import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';

export const routes: Routes = [
  // { path: 'users/manage',component: ManageUsersComponent,canActivate: [authCanActivateGuard], canActivateChild: [authCanActivateChildGuard]  },
  // { path: 'users/manage/view/:id',component: ViewApplicantComponent,canActivate: [authCanActivateGuard], canActivateChild: [authCanActivateChildGuard]  },
  // { path: 'contracts/manage',component: ManageContractsComponent,canActivate: [authCanActivateGuard], canActivateChild: [authCanActivateChildGuard]  },
  // { path: 'contracts/templates',component: ContractTemplatesComponent,canActivate: [authCanActivateGuard], canActivateChild: [authCanActivateChildGuard]  },
  // { path: 'contracts/templates/create',component: ViewContractTemplateComponent,canActivate: [authCanActivateGuard], canActivateChild: [authCanActivateChildGuard]  },
  // { path: 'contracts/templates/view/:id',component: ViewContractTemplateComponent,canActivate: [authCanActivateGuard], canActivateChild: [authCanActivateChildGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login'},
];
