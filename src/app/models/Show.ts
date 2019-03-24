import {Schedule} from './shows/Schedule';
import {Rating} from './shows/Rating';
import {Network} from './shows/Network';
import {Image} from './shows/Image';

export class Show {
  id: number;
  name: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: Date;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  network: Network;
  image: Image;
  summary: string;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.language = args.language;
    this.genres = args.genres;
    this.status = args.status;
    this.runtime = args.runtime;
    this.premiered = args.premiered;
    this.officialSite = args.officialSite;
    this.schedule = args.schedule;
    this.rating = args.rating;
    this.network = args.network;
    this.image = args.image;
    this.summary = args.summary;
  }
}
