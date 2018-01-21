import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'daycare',
            loadChildren: './daycare/daycare.module#DaycareModule',
        },
        {
            path: 'sports',
            loadChildren: './sports/sports.module#SportsModule',
        },
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
