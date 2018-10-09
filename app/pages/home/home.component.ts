import { Component } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums"; // used to describe at what accuracy the location should be get

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "./home.html",
    styleUrls: ["./home-common.css", "./home.css"]
})
export class HomeComponent {
    lat: any;
    lon: any;
    speed: any;
    addr: any;

    constructor(private page: Page, private router: RouterExtensions) {
        page.actionBarHidden = false;
        page.actionBar.title = "Home";
        this.lat = "";
        this.lon = "";
        this.addr = "";
    }

    getLocation() {
        geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
            .then(res => {
                console.log(res);
                this.lat = res.latitude;
                this.lon = res.longitude;
                // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
                // fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyBfHUkK6hWIfd9fTCoq8jT2Hi0a9I9xg6k")
                //     .then((response) => response.json()).then((r) => {
                //         console.log('r', r);
                //         this.addr = r.results[0].formatted_address;
                //     });
            });
    }

    goFacebook() {
        utils.openUrl("http://facebook.com/internationalfirebuffassociation/");
    }
    goTwitter() {
        utils.openUrl("https://twitter.com/intfirebuff");
    }
    goTo(route: string) {
        this.router.navigate(["/lazy/" + route], { clearHistory: false });
    }
}