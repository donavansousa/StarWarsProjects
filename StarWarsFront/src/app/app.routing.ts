import {Routes,RouterModule} from "@angular/router";
import { ResultComponent } from "./result/result.component";
import { ModuleWithProviders } from "@angular/core";

 const APP_ROUTES: Routes=[
     {path:"",component: ResultComponent},
 ];

 export const routing:ModuleWithProviders=RouterModule.forRoot(APP_ROUTES);