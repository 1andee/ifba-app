// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";

import { AppModule } from "./app.module";

//  Hot Module Replacement
let options: AppOptions = {};
if (module['hot']) {
    const hmrUpdate = require("nativescript-dev-webpack/hmr").hmrUpdate;

    // options.hmrOptions = {
    options['hmrOptions'] = {
        moduleTypeFactory: () => AppModule,
        livesyncCallback: (platformReboot) => {
            console.log("HMR: Sync...")
            hmrUpdate();
            setTimeout(platformReboot, 0);
        },
    }
    hmrUpdate();
    module['hot'].accept(["./app.module"]);
}

platformNativeScriptDynamic(options).bootstrapModule(AppModule);
