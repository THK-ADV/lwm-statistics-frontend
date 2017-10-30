import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatternDetailComponent} from './pattern-detail/pattern-detail.component';
import {PatternsComponent} from './patterns/patterns.component';

/**
 * Created by Florian on 28.08.2017.
 */
export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pattern/:id', component: PatternDetailComponent},
    {path: 'pattern', component: PatternsComponent}
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true
});
