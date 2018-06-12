import { Episode } from './episode';
import { Season } from './season';


export class Serie {
    id: number;
    name: string;
    idSeasons: number[];
    idEpisodes: number[];
    numberSeasons: number;
    numberEpisodes: number;
    finished: boolean;
}