import { Component } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "./home.html",
    styleUrls: ["./home-common.css", "./home.css"]
})
export class HomeComponent {

    constructor(private page: Page, private router: RouterExtensions) {
        page.actionBarHidden = false;
        page.actionBar.title = "Home";
    }

    goFacebook() {
        utils.openUrl("http://facebook.com/internationalfirebuffassociation/");
    }
    goTwitter() {
        utils.openUrl("https://twitter.com/intfirebuff");
    }
    ngOnInit() {
    }
    goTo(route: string) {
        this.router.navigate(["/lazy/" + route], { clearHistory: false });
    }
}