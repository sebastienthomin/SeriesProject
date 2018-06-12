import { Serie } from "./serie";

export const SERIES: Serie[] = [
    { id: 1, name: 'Game of Thrones', idSeasons: [1, 2], idEpisodes: [1, 2], numberSeasons: 7, numberEpisodes: 100, finished: false },
    { id: 2, name: 'Vikings', idSeasons: [1, 2, 5], idEpisodes: [3, 4, 5], numberSeasons: 5, numberEpisodes: 67, finished: true },
    { id: 3, name: 'Black Mirror', idSeasons: [1, 2], idEpisodes: [6, 7, 8, 9], numberSeasons: 4, numberEpisodes: 38, finished: false }
  ];

  /*id: number;
    name: string;
    seasons: number[];
    episodes: number[];
    numberSeasons: number;
    numberEpisodes: number;
    finished: boolean;*/