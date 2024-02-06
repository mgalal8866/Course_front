import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./core/components/nav/nav.routes').then(m => m.NavRoutes),

  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/components/auth/auth.routes').then((m) => m.AuthRoutes),
  },

  {
    path: 'competitions',
    loadComponent: () => import('./pages/competitions/competitions.component').then(m => m.CompetitionsComponent),
  },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
