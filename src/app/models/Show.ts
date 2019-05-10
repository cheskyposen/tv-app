import {Season} from './Season';
import * as moment from 'moment';
import {Episode} from './Episode';

export class Show {
  id: number;
  name: string;
  language: string;
  genres: Array<string>;
  status: string;
  premiered: any;
  officialSite: string;
  rating: number;
  image: string;
  summary: string;
  seasons: Season[];
  prevUrl: string;
  nextUrl: string;
  prevEpisode: Episode;
  nextEpisode: Episode;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.language = args.language;
      this.genres = args.genres;
      this.status = args.status;
      this.premiered = moment(args.premiered, moment.HTML5_FMT.DATETIME_LOCAL);
      this.officialSite = args.officialSite;
      this.rating = (args.rating) ? args.rating.average : null;
      this.image = (args.image) ? args.image.medium.charAt(4) === ':' ?
        'https' + args.image.medium.substring(4) : args.image.medium : null;
      this.summary = args.summary;
      this.seasons = args.seasons;
      if (args._links) {
        this.prevUrl = (args._links.previousepisode) ? args._links.previousepisode.href.charAt(4) === ':' ?
          `https${args._links.previousepisode.href.substring(4)}` : args._links.previousepisode.href : null;
        this.nextUrl = (args._links.nextepisode) ? args._links.nextepisode.href.charAt(4) === ':' ?
          `https${args._links.nextepisode.href.substring(4)}` : args._links.nextepisode.href : null;
      }
    }
  }
}
