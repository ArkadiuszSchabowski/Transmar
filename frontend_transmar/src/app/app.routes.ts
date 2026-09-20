import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';
import { Register } from './components/register/register';
import { ProductList } from './components/product/product-list/product-list';
import { AssemblyLineList } from './components/assembly-line/assembly-line-list/assembly-line-list';
import { WorkstationList } from './components/workstation/workstation-list/workstation-list';
import { Assignment } from './components/assignment/assignment';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'product-list',
    component: ProductList,
  },
  {
    path: 'assembly-line-list',
    component: AssemblyLineList,
  },
  {
    path: 'workstation-list',
    component: WorkstationList,
  },
  {
    path: 'assignment',
    component: Assignment,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
