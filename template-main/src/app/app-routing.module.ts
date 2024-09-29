import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesLayoutComponent } from './layout/pages-layout/pages-layout.component';
import { BasicLayoutComponent } from './layout/basic-layout/basic-layout.component';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    component: PagesLayoutComponent,
    data: { role: 'USER' },
    canActivate: [authGuard],
    children: [
      {
        path: 'transaction',
        loadChildren: () =>
          import('./pages/transaction/transaction.module').then(
            (m) => m.TransactionModule
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
