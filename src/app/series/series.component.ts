import { SerieService } from './../serie.service';
import { Serie } from './../serie';
import { Component, OnInit } from '@angular/core';
import { SERIES } from '../mock-series';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})


export class SeriesComponent implements OnInit {

  
  series: Serie[];
  
  selectedSerie: Serie;



  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
  
  getSeries(): void {
    this.serieService.getSeries().subscribe(series => this.series = series);
  }

}
