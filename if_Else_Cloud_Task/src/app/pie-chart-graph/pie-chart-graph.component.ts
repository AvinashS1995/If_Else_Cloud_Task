import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  stroke: ApexStroke | any;
  colors: string[] | any;
};

@Component({
  selector: 'app-pie-chart-graph',
  templateUrl: './pie-chart-graph.component.html',
  styleUrls: ['./pie-chart-graph.component.scss']
})
export class PieChartGraphComponent {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [50, 30, 20],
      chart: {
        height: 350,
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
              }
            }
          }
        }
      },
      labels: ["Men", "Electronics", "Women",],
      colors: ['#0000FF', '#1c1cd4', '#87CEFA'],
      fill: {
        colors: ['#0000FF', '#1c1cd4', '#87CEFA']
      },
    };
  }
}
