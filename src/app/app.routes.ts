import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageCollapsibleComponent } from './pages/page-collapsible/page-collapsible.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'collapsible',
    component: PageCollapsibleComponent,
  },
];
