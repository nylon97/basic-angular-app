import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecondComponent } from "./second.component";
import { SecondModule } from "./second.module";

const routes: Routes = [
    { path: '', component: SecondComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SecondModule
    ],
    exports: [RouterModule]
})
export class SecondRoutingModule {}