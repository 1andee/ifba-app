import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";
import { LocateComponent } from "../pages/locate/locate.component";
import { ContactComponent } from "../pages/contact/contact.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "locate", component: LocateComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

export const navigatableComponents = [
    HomeComponent,
    ContactComponent,
    LocateComponent,
];