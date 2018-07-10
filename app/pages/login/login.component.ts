import { Component, ElementRef, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Page } from "ui/page";
import { map } from "rxjs/operators";
import { UserService } from "../../shared/services.module";
import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "ui/dialogs";
import * as appVersion from "nativescript-appversion";
import { on as applicationOn, resumeEvent, ApplicationEventData } from "application";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "./login.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent implements OnInit {
    navigating: boolean = false;

    constructor(private http: HttpClient, private router: RouterExtensions, private userService: UserService, private page: Page) {
        applicationOn(resumeEvent, (args: ApplicationEventData) => {
            this.navigating = true;
            this.login(true);
        });
        page.actionBarHidden = true;
    }

    login(resume = false) {
        appVersion.getVersionCode().then((userVersion: string) => {
            this.userService.login()
                .subscribe(
                    (res: any) => {
                        console.log(res);
                        if (res.version == userVersion) {
                            setTimeout(() => { this.router.navigate(["/lazy/home"], { clearHistory: true, animated: false }) }, 500);
                        } else {
                            alert({
                                title: "Update Required",
                                message: "Version " + userVersion + " is out of date. Please update.",
                                okButtonText: "Ok"
                            })
                                .then(result => {
                                    console.log("Update required");
                                });
                        }
                    },
                    (error) => {
                        alert({
                            title: "Sorry",
                            message: "A network problem was encountered. Please check your connection.",
                            okButtonText: "Retry"
                        })
                            .then(result => {
                                this.login();
                            });
                    }
                );
        });
    }

    ngOnInit() {
        if (!this.navigating) {
            this.login();
        }
    }
}