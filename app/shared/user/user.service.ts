import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Config } from "../config";
import { RouterExtensions } from "nativescript-angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
    navigationEventListener: boolean = false;

    constructor(private http: HttpClient, private router: RouterExtensions) {
    }

    login() {
        return this.http.get(`https://raw.githubusercontent.com/1andee/ifba-server/master/version.json?token=AQDLXGCkhSvqfn8WvoizDFgf7KzUiUvIks5bVqD_wA%3D%3D`)
            .pipe(map(reponse => reponse));
    }
}