

1) main.ts 

import { ApplicationRef } from "@angular/core";
import { enableDebugTools } from "@angular/platform-browser";

platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
  let applicationRef = module.injector.get(ApplicationRef);
  let appComponent = applicationRef.components[0];
  enableDebugTools(appComponent);
});

// in the console run 
ng.probe($0)
ng.profiler.timeChangeDetection({record: true})

2) https://augury.angular.io/ // google chrome extension


// Angular CLI

1) ng new app --style=scss --routing
2) ng serve -o
3)ng g module testmodule
 //create lowerccae and register it in testmodule (default registered in app.module)
4)ng g pipe lowerccae testmodule
5) ng test // start e2e tests
6)ng update
7)ng doc Input /// open browser and serch 