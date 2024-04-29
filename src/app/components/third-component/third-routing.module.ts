import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThirdComponent } from "./third.component";
import { ThirdModule } from "./third.module";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: '', component: ThirdComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ThirdModule,
        CommonModule
    ],
    exports: [RouterModule]
})
export class ThirdRoutingModule {}