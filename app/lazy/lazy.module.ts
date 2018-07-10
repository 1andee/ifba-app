import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { navigatableComponents } from './lazy.routing';

import { routing } from './lazy.routing';

@NgModule({
    imports: [
        routing,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule
    ],
    declarations: [
        ...navigatableComponents
    ]
})
export class LazyModule { }