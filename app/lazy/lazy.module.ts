import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { navigatableComponents } from './lazy.routing';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { routing } from './lazy.routing';

@NgModule({
    imports: [
        routing,
        NativeScriptRouterModule,
        NativeScriptCommonModule,
        TNSFontIconModule
    ],
    declarations: [
        ...navigatableComponents
    ]
})
export class LazyModule { }