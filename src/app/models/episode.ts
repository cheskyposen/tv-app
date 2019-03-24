import {Image} from './show/Image';
import {Links} from './show/Links';

export class Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: Date;
  airtime: Date;
  airstamp: Date;
  runtime: number;
  image: Image;
  summary: string;
  links: Links;

  constructor(args?) {
    this.id = args.id;
    this.url = args.url;
    this.name = args.name;
    this.season = args.number;
    this.number = args.number;
    this.airdate = args.airdate;
    this.airtime = args.airtime;
    this.airstamp = args.airstamp;
    this.runtime = args.runtime;
    this.image = args.image;
    this.summary = args.summary;
    this.links = args.links;
  }
}
