import { Component } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";

@Component({
    moduleId: module.id,
    selector: "contact",
    templateUrl: "./contact.html",
    styleUrls: ["./contact-common.css", "./contact.css"]
})
export class ContactComponent {

    constructor(private page: Page, private router: RouterExtensions) {
        page.actionBar.title = "Contact";
    }

    goTo(route: string) {
        this.router.navigate(["/lazy/" + route], { clearHistory: false });
    }
}