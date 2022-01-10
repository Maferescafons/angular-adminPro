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
  }
