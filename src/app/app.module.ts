import { SeasonService } from './season.service';
import { EpisodeService } from './episode.service';
import { MessageService } from './message.service';
import { SerieService } from './serie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    EpisodesComponent,
    SeasonsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SerieService, MessageService, EpisodeService, SeasonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
