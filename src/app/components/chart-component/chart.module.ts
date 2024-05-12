import { NgModule } from "@angular/core";
import { ChartComponent } from "./chart.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartRoutingModule } from "./chart-routing.module";

@NgModule({
    declarations: [
        ChartComponent
    ],
    imports: [
        NgxChartsModule,
        ChartRoutingModule
    ]
})
export class ChartModule {}