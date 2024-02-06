import { Routes } from '@angular/router';
import { NavComponent } from './nav.component';

export const NavRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../../../pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'free-services',
        data: {breadcrumb: 'free_services.breadcrumb'},
        loadChildren: () =>
          import('../../../pages/free-services/free-services.routes').then((m) => m.FreeServicesRoutes),
      },
    ]
  }
];
