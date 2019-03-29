import {Episode} from './Episode';
import * as moment from 'moment';

export class Season {
  id: number;
  number: number;
  premiereDate: any;
  endDate: any;
  image: { medium: string };
  episodes: Episode[];

  constructor(args?) {
    this.id = args.id;
    this.number = args.number;
    this.premiereDate = moment(args.premiereDate);
    this.endDate = moment(args.endDate);
    this.image = args.image;
    this.episodes = args.episodes;
  }
}
