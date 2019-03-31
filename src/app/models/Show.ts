import {Season} from './Season';
import * as moment from 'moment';
import {Episode} from './Episode';
import {TvMazeService} from './services/tv-maze.service';

export class Show {
  // private tvMazeService: TvMazeService;
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
      this.image = (args.image) ? args.image.medium : null;
      this.summary = args.summary;
      this.seasons = args.seasons;
      if (args._links) {
        this.prevUrl = (args._links.previousepisode) ? args._links.previousepisode.href : null;
        this.nextUrl = (args._links.nextepisode) ? args._links.nextepisode.href : null;
      }
      // if (args._links) {
      //   if (args._links.previousepisode) {
      //     this.tvMazeService.apiCall(args._links.previousepisode.href)
      //       .subscribe((result) => this.prevEpisode = result);
      //   }
      //   if (args._links.nextepisode) {
      //     this.tvMazeService.apiCall(args._links.nextepisode.href)
      //       .subscribe((result) => this.nextEpisode = result);
      //   }
      // }
    }
  }
}
