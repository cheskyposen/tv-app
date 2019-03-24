import {Image} from './shows/Image';
import {Network} from './shows/Network';

export class Season {
  id: number;
  url: string;
  name: string;
  episodeOrder: number;
  premiereDate: Date;
  endDate: Date;
  network: Network;
  webChannel: null;
  image: Image;
  summary: string;

  constructor(args?) {
    this.id = args.id;
    this.url = args.url;
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
