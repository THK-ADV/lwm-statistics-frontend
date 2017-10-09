import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ResourceDetailComponent} from './resource-detail/resource-detail.component';
import {ResourcesComponent} from "./resources/resources.component";

/**
 * Created by Florian on 28.08.2017.
 */
export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'resource/:id', component: ResourceDetailComponent},
    {path: 'resources', component: ResourcesComponent}
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true
});
