import { Component, OnInit } from '@angular/core';
import { EPISODES } from '../mock-episodes';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes = EPISODES;

  constructor() { }

  ngOnInit() {
  }

}
