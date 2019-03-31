import {Episode} from './Episode';
import * as moment from 'moment';

export class Season {
  id: number;
  number: number;
  premiereDate: any;
  endDate: any;
  image: string;
  episodes: Episode[];

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.number = args.number;
      this.premiereDate = moment(args.premiereDate, moment.HTML5_FMT.DATETIME_LOCAL);
      this.endDate = moment(args.endDate, moment.HTML5_FMT.DATETIME_LOCAL);
      this.image = (args.image) ? args.image.medium : null;
      this.episodes = args.episodes;
    }
  }
}
