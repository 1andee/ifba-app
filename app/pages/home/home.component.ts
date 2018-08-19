import { Component } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums"; // used to describe at what accuracy the location should be get
import { ListPicker } from "ui/list-picker";
import * as dialogs from "ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "./home.html",
    styleUrls: ["./home-common.css", "./home.css"]
})
export class HomeComponent {
    clubs: any = [];
    filteredClubs: any = [];
    lat: any;
    lon: any;
    speed: any;
    addr: any;
    stateSelector: any = [];
    displayName: string;

    constructor(private page: Page, private router: RouterExtensions) {
        page.actionBarHidden = false;
        page.actionBar.title = "Home";
        this.lat = "";
        this.lon = "";
        this.speed = "";
        this.addr = "";
        this.clubs = [
            {
                "name": "Box 43 Association",
                "region": 10,
                "country": "Canada",
                "state": "Ontario",
                "state_code": "ON",
                "location": "Hamilton",
                "twitter": "Box43Pio",
                "canteen": true
            },
            {
                "name": "Club Appel 99",
                "region": 10,
                "country": "Canada",
                "state": "Quebec",
                "state_code": "QC",
                "location": "Quebec City",
                "website": "http://www.clubappel99.ca",
                "canteen": true
            },
            {
                "name": "Greater Toronto Multiple Alarm Association",
                "region": 10,
                "country": "Canada",
                "state": "Ontario",
                "state_code": "ON",
                "location": "Toronto",
                "website": "gtmaa.com",
                "facebook": "http://facebook.com/gtmaa",
                "twitter": "gtmaa",
                "instagram": "gtmaa.sup7",
                "canteen": true
            },
            {
                "name": "Pompiers Auxiliaires de Montreal",
                "region": 10,
                "country": "Canada",
                "state": "Quebec",
                "state_code": "QC",
                "location": "Montreal",
                "website": "http://www.museedespompiers.com",
                "facebook": "https://www.facebook.com/museedespompiersdemontreal",
                "canteen": true
            },
            {
                "name": "Ontario Fire Buff Associates",
                "region": 10,
                "country": "Canada",
                "state": "Ontario",
                "state_code": "ON",
                "website": "http://www.ofba.ca",
                "facebook": "https://www.facebook.com/groups/169640076461/"
            }
        ];
        this.stateSelector = [];
        this.clubs.forEach((club) => {
            this.stateSelector.push(club.state_code);

        })
    }

    getLocation() {
        geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
            .then(res => {
                console.log(res);
                this.lat = res.latitude;
                this.lon = res.longitude;
                this.speed = res.speed;
                // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
                fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyBfHUkK6hWIfd9fTCoq8jT2Hi0a9I9xg6k")
                    .then((response) => response.json()).then((r) => {
                        console.log('r', r);
                        this.addr = r.results[0].formatted_address;
                    });
            });
    }

    goFacebook() {
        utils.openUrl("http://facebook.com/internationalfirebuffassociation/");
    }
    goTwitter() {
        utils.openUrl("https://twitter.com/intfirebuff");
    }
    filterClubs(state) {
        this.filteredClubs = [];
        this.clubs.forEach((club) => {
            if (state === 'all') {
                this.filteredClubs.push(club);
            } else if (club.state_code === state) {
                this.filteredClubs.push(club);
            }
        })
    }
    // selectedIndexChanged(args) {
    //     let picker = <ListPicker>args.object;
    //     this.picked = this.stateSelector[picker.selectedIndex];
    //     this.filterClubs(this.picked);
    // }
    ngOnInit() {
        this.filterClubs('all');
    }
    goTo(route: string) {
        this.router.navigate(["/lazy/" + route], { clearHistory: false });
    }
}