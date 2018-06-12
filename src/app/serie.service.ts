import { MessageService } from './message.service';
import { Injectable } from '@angular/core';

import { SERIES } from './mock-series';
import { Serie } from './serie';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';



@Injectable()

export class SerieService {

  

  constructor(private messageService: MessageService) { }

  getSeries(): Observable<Serie[]> {
    this.messageService.add('SerieService : Séries chargées');
    return of(SERIES);
  } 

  getEpisodes(): Observable<Episode[]> {
    this.messageService.add('SerieService : Episodes chargés');
    return of(EPISODES);
  }

}