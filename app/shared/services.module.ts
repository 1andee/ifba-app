import { NgModule } from "@angular/core";
import { UserService } from "../shared/user/user.service";

@NgModule({})
export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [UserService]
        }
    }
}
export {
    UserService,
}