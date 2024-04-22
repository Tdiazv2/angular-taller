import { Component, OnInit } from '@angular/core';
import {Serie} from './series';
import {series} from './datos';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series:Array<Serie> = [];
  constructor() { }

  getSeriesList(): Array<Serie>{
    return series 
  }
  calcularPromedioSeasons(): number {
    // Sumar todas las temporadas
    const totalSeasons = this.series.reduce((total, serie) => total + serie.seasons, 0);
    // Calcular el promedio
    const promedio = totalSeasons / this.series.length;
    return promedio;
  }
  ngOnInit() {
    this.series = this.getSeriesList();
  }

}
