import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  titulo:string='Sales';
  public labels1: string[] = [ 'pan', 'Queso', 'Cola' ];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 35, 45, 100 ] }
    ]
  };
  public labels2: string[] = [ 'algo1', 'algo2', 'algo3' ];
  public data2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      { data: [ 250, 290, 150 ] }
    ]
  };
  }
