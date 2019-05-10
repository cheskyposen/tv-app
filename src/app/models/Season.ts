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
      this.premiereDate = moment(args.premiereDate, moment.HTML5_FMT.DATE);
      this.endDate = moment(args.endDate, moment.HTML5_FMT.DATE);
      this.image = (args.image) ? args.image.medium.charAt(4) === ':' ?
        'https' + args.image.medium.substring(4) : args.image.medium : null;
      this.episodes = args.episodes;
    }
  }
}
