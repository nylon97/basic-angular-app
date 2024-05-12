import { LegendPosition } from "@swimlane/ngx-charts";

export interface HorizontalBarModel {
    showXAxis: boolean;
    showYAxis: boolean;
    gradient: boolean;
    showLegend: boolean;
    showXAxisLabel: boolean;
    yAxisLabel: string;
    showYAxisLabel: boolean;
    xAxisLabel: string;
}

export interface PieModel {
    gradient: boolean;
    showLegend: boolean;
    showLabels: boolean;
    isDoughnut: boolean;
    legendPosition: LegendPosition;
}

export interface LineModel {
    legend: boolean;
    showLabels: boolean;
    animations: boolean;
    xAxis: boolean;
    yAxis: boolean;
    showYAxisLabel: boolean;
    showXAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    timeline: boolean;
}