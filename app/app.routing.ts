import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";

export const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);