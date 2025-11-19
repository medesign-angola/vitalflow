import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then(component => component.HomePage),
        title: 'Página inicial - VitalFlow'
    },
    {
        path: 'terms',
        loadComponent: () => import('./pages/terms/terms.page').then(component => component.TermsPage),
        title: 'Termos de utilização - VitalFlow'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
