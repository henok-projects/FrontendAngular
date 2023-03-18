import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './core/components/layouts/account/account.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
