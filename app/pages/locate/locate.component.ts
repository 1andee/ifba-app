import { Component, ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";
import {registerElement} from "nativescript-angular/element-registry";
registerElement("FilterableListpicker", () => require("nativescript-filterable-listpicker").FilterableListpicker);

@Component({
    moduleId: module.id,
    selector: "locate",
    templateUrl: "./locate.html",
    styleUrls: ["./locate-common.css", "./locate.css"]
})
export class LocateComponent {
    @ViewChild('stateFilter') stateFilter: ElementRef;
    clubs: any = [];
    filteredClubs: any = [];
    stateSelector: any = [];
    picked: string;
    index: number;
    showingExpanded: boolean = false;
    club: any;
    stateList: any = [];
    showingPicker: boolean = false;

    constructor(private page: Page, private router: RouterExtensions) {
        page.actionBar.title = "Club Locator";
        this.filteredClubs = [];
        this.stateList = [];
        this.showingPicker = false;
        this.clubs = [
            {
                "name": "Box 15 Club of Los Angeles",
                "region": 7,
                "country": "United States",
                "state": "California",
                "state_code": "CA",
                "location": "Los Angeles",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
            {
                "name": "Fire Associates of Santa Clara Valley",
                "region": 7,
                "country": "United States",
                "state": "California",
                "state_code": "CA",
                "location": "",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": true,
                "notes": ""
            },
            {
                "name": "Phoenix Society of San Francisco",
                "region": 7,
                "country": "United States",
                "state": "California",
                "state_code": "CA",
                "location": "San Francisco",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
            {
                "name": "Seattle Fire Buff Society",
                "region": 7,
                "country": "United States",
                "state": "Washington",
                "state_code": "WA",
                "location": "Seattle",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
            {
                "name": "Tacoma/Pierce County Fire Buffs",
                "region": 7,
                "country": "United States",
                "state": "Washington",
                "state_code": "WA",
                "location": "",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
            {
                "name": "Bayonne Fire Canteen",
                "region": 9,
                "country": "United States",
                "state": "New Jersey",
                "state_code": "NJ",
                "location": "Bayonne",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": true,
                "notes": ""
            },
            {
                "name": "Bell & Siren Club",
                "region": 9,
                "country": "United States",
                "state": "New Jersey",
                "state_code": "NJ",
                "location": "Newark",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": true,
                "notes": ""
            },
            {
                "name": "Box 54 Club",
                "region": 9,
                "country": "United States",
                "state": "New Jersey",
                "state_code": "NJ",
                "location": "Teaneck",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": true,
                "notes": ""
            },
            {
                "name": "Fire Bell Club of New York",
                "region": 9,
                "country": "United States",
                "state": "New York",
                "state_code": "NY",
                "location": "New York City",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
            {
                "name": "Gong Club",
                "region": 9,
                "country": "United States",
                "address": "244 Bay St",
                "state": "New Jersey",
                "state_code": "NJ",
                "location": "Jersey City",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": true,
                "notes": ""
            },
            {
                "name": "Second Alarmers Association",
                "region": 9,
                "country": "United States",
                "state": "",
                "state_code": "",
                "location": "",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": true,
                "notes": ""
            },
            {
                "name": "SPAAMFAA",
                "region": 9,
                "country": "United States",
                "state": "",
                "state_code": "",
                "location": "",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
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
                "canteen": true,
                "notes": ""
            },
            {
                "name": "Ontario Fire Buff Associates",
                "region": 10,
                "country": "Canada",
                "state": "Ontario",
                "state_code": "ON",
                "website": "http://www.ofba.ca",
                "facebook": "https://www.facebook.com/groups/169640076461/",
                "notes": ""
            },
            {
                "name": "Central Florida Fire Buffs",
                "region": 11,
                "country": "United States",
                "state": "Florida",
                "state_code": "FL",
                "location": "",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
            {
                "name": "Metropolitan Fire Association of Atlanta",
                "region": 11,
                "country": "United States",
                "state": "Georgia",
                "state_code": "GA",
                "location": "Atlanta",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": false,
                "notes": ""
            },
            {
                "name": "South Florida Rehab & Emergency Support",
                "region": 11,
                "country": "United States",
                "state": "Florida",
                "state_code": "FL",
                "location": "",
                "website": "",
                "facebook": "",
                "twitter": "",
                "instagram": "",
                "canteen": true,
                "notes": ""
            }
        ];
        this.clubs.forEach((club) => {
            if (!this.stateList.includes(club.state) && club.state.length) {
                this.stateList.push(club.state);
            }
        })
        this.stateList.sort();
        this.stateList.unshift('All');
    }

    cancelFilterableList() {
        console.log('canceled');
    }
    
    itemTapped(args) {
        this.filterClubs(args.selectedItem);
        this.showingPicker = false;
    }
    
    showPicker() {
        this.showingPicker = true;
        this.stateFilter.nativeElement.show();
    }

    filterClubs(state) {
        this.filteredClubs = [];
        this.clubs.forEach((club) => {
            if (state === 'All') {
                this.filteredClubs.push(club);
            } else if (club.state === state) {
                this.filteredClubs.push(club);
            }
        })
        this.sortFilteredClubs();
    }

    sortFilteredClubs() {
        let newArray = this.filteredClubs.sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
        });
        this.filteredClubs = newArray;
    }

    expandClub(item) {
        this.club = item;
        this.showingExpanded = true;
    }

    collapse() {
        this.club = {};
        this.showingExpanded = false;
    }

    openUrl(url) {
        utils.openUrl(url);
    }
    goTo(route: string) {
        this.router.navigate(["/lazy/" + route], { clearHistory: false });
    }
    ngOnInit() {
        this.filterClubs('All');
    }
}