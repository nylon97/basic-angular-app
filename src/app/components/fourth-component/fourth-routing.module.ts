import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FourthComponent } from "./fourth.component";
import { FourthModule } from "./fourth.module";

const routes: Routes = [
    { path: '', component: FourthComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FourthModule
    ],
    exports: [RouterModule]
})
export class FourthRoutingModule {}