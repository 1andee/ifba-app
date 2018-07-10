import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

export const navigatableComponents = [
    HomeComponent,
];