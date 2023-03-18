import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './core/components/layouts/account/account.component';
import { DashboardComponent } from './core/components/layouts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/login',
    pathMatch: 'full',
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { pageTitle: 'Accout master page' },
    children: [
      {
        path: 'login',
        data: { pageTitle: 'Login page' },
        loadChildren: () =>
          import('./pages/account/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'forgot-password',
        data: { pageTitle: 'Forgot password page' },
        loadChildren: () =>
          import('./pages/account/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { pageTitle: 'Dashboard Master Layout' },
    children: [
      {
        path: '',
        data: { pageTitle: 'Dashboard Summary' },
        loadChildren: () =>
          import('./pages/dashboard/summary/summary.module').then(
            (m) => m.SummaryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
