
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { ServicesModule } from "./shared/services.module";

import { routing } from "./app.routing";
import { LoginComponent } from "./pages/login/login.component";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule,
        routing,
        ServicesModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }