import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainAgeComponent } from "./components/main-age/main-age.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MainAgeComponent}
        ]),     
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {

}