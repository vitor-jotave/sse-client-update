import { Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard.component';
import { EmendasComponent } from './emendas/emendas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardMainComponent
    },
    {
        path: 'emendas',
        component: EmendasComponent
    }
];
