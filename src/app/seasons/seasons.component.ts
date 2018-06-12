import { SeasonService } from './../season.service';
import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { SEASONS } from '../mock-seasons';
import { Season } from '../season';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  seasons: Season[] = [];

  constructor(private seasonService: SeasonService) { }

  ngOnInit() {
    this.getSeasons();
  }

  getSeasons(): void {
    this.seasonService.getSeasons()
    .subscribe(seasons => this.seasons = seasons);
  }

}
