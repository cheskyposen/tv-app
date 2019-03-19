import {Schedule} from './Schedule';
import {Rating} from './Rating';
import {Network} from './Network';
import {Externals} from './Externals';
import {Image} from './Image';
import {Links} from './Links';

export class Movie {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: Date;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  links: Links;
  embedded: object;

  constructor(args?) {
    this.id = args.id;
    this.url = args.url;
    this.name = args.name;
    this.type = args.type;
    this.language = args.language;
    this.genres = args.genres;
    this.status = args.status;
    this.runtime = args.runtime;
    this.premiered = args.premiered;
    this.officialSite = args.officialSite;
    this.schedule = args.schedule;
    this.rating = args.rating;
    this.weight = args.weight;
    this.network = args.network;
    this.webChannel = args.webChannel;
    this.externals = args.externals;
    this.image = args.image;
    this.summary = args.summary;
    this.updated = args.updated;
    this.links = args._links;
    this.embedded = args._embedded;
  }
}
