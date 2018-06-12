import { Component, OnInit } from '@angular/core';
import { SEASONS } from '../mock-seasons';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  seasons = SEASONS;

  constructor() { }

  ngOnInit() {
  }

}
