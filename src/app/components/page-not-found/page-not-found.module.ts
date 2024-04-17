import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from './page-not-found.component';
import { CommonModule } from "@angular/common";
import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";

@NgModule({
    imports: [
        CommonModule,
        PageNotFoundRoutingModule
    ]
})
export class PageNotFoundModule {}