import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first.component";
import { FirstModule } from "./first.module";

const routes: Routes = [
    { path: '', component: FirstComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FirstModule
    ],
    exports: [RouterModule]
})
export class FirstRoutingModule {}