import { EpisodeService } from './../episode.service';
import { Component, OnInit } from '@angular/core';

import { Episode } from '../episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.getEpisodes();
  }


  getEpisodes(): void {
    this.episodeService.getEpisodes()
    .subscribe(episodes => this.episodes = episodes)
  }

}
