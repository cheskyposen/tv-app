import {Episode} from './Episode';

export class Season {
  id: number;
  number: number;
  episodeOrder: number;
  premiereDate: Date;
  endDate: Date;
  image: { medium: string };
  episodes: Episode[];

  constructor(args?) {
    this.id = args.id;
    this.number = args.number;
    this.episodeOrder = args.episodeOrder;
    this.premiereDate = args.premiereDate;
    this.endDate = args.endDate;
    this.image = args.image;
    this.episodes = args.episodes;
  }
}
