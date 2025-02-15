import { Routes } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';

export const routes: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: '', redirectTo: '/departments', pathMatch: 'full' }
  ];
