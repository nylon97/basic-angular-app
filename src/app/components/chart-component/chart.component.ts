import { Component } from "@angular/core";
import { HorizontalBarModel, PieModel, LineModel } from "src/app/models/chart.model";
import { single, multi } from './data';
import { LegendPosition } from "@swimlane/ngx-charts";

@Component({
    selector: 'chart-component',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent {

    single: any = single;
    multi: any = multi;
    view: [number, number] = [700, 400];

    horizontalBarModel: HorizontalBarModel = {
        showXAxis: true,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        yAxisLabel: 'Country',
        showYAxisLabel: true,
        xAxisLabel: 'Population',
    }

    pieModel: PieModel = {
        gradient: true,
        showLegend: true,
        showLabels: true,
        isDoughnut: false,
        legendPosition: LegendPosition.Below,
    };

    lineModel: LineModel = {
        legend: true,
        showLabels: true,
        animations: true,
        xAxis: true,
        yAxis: true,
        showYAxisLabel: true,
        showXAxisLabel: true,
        xAxisLabel: 'Year',
        yAxisLabel: 'Population',
        timeline: true,
    }

    colorScheme: any = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() { }

    onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data: any): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: any): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}