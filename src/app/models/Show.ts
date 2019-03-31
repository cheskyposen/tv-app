import {Season} from './Season';
import * as moment from 'moment';

export class Show {
  id: number;
  name: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: any;
  officialSite: string;
  rating: { average: number };
  image: { medium: string };
  summary: string;
  seasons: Season[];
  upNext: {nextepisode: any};

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.language = args.language;
    this.genres = args.genres;
    this.status = args.status;
    this.runtime = args.runtime;
    this.premiered = moment(args.premiered, moment.HTML5_FMT.DATETIME_LOCAL);
    this.officialSite = args.officialSite;
    this.rating = args.rating;
    this.image = args.image;
    this.summary = args.summary;
    this.seasons = args.seasons;
    if (args._embedded !== undefined) {
      this.upNext = args._embedded;
    }
  }
}
