import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "./home.html",
    styleUrls: ["./home-common.css", "./home.css"]
})
export class HomeComponent {

    constructor(private route: Router, private router: RouterExtensions) { }

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