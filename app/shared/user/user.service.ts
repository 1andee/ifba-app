import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Config } from "../config";
import { RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/concat";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/take";

@Injectable()
export class UserService {
    navigationEventListener: boolean = false;

    constructor(private http: HttpClient, private router: RouterExtensions) {
    }

    login() {
        return this.http.get(`https://raw.githubusercontent.com/1andee/ifba-server/master/version.json?token=AQDLXLwVOS5eKBH3dp8AqGDMHVbGy7nGks5bTWVgwA%3D%3D`)
            .map(response => response)
    }
}