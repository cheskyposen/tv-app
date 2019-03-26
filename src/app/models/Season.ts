import {Image} from './shows/Image';
import {Network} from './shows/Network';
import {Episode} from './Episode';
import {TvmazeService} from './services/tvmaze.service';

export class Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: Date;
  endDate: Date;
  network: Network;
  webChannel: null;
  image: Image;
  summary: string;
  episodes: Episode[];

  constructor(args?) {
    this.id = args.id;
    this.url = args.url;
    this.number = args.number;
    this.name = args.name;
    this.episodeOrder = args.episodeOrder;
    this.premiereDate = args.premiereDate;
    this.endDate = args.endDate;
    this.network = args.network;
    this.webChannel = args.webChannel;
    this.image = args.image;
    this.summary = args.summary;
  }
}
