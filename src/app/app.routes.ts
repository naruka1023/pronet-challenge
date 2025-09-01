import { Routes } from '@angular/router';
import { Detail } from './page/detail/detail';
import { List } from './page/list/list';
import { Favorite } from './page/favorite/favorite';
import { Dashboard } from './layout/dashboard/dashboard';
import { LandingPage } from './page/landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: List,
      },
      {
        path: 'detail/:id',
        component: Detail,
      },
      {
        path: 'favorite',
        component: Favorite,
      },
    ],
  },
];
