import * as moment from 'moment';

export class Episode {
  id: number;
  name: string;
  number: number;
  airDate: any;
  runtime: number;
  image: string;
  summary: string;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.number = args.number;
      this.airDate = moment(args.airdate + 'T' + args.airtime, moment.HTML5_FMT.DATETIME_LOCAL);
      this.runtime = args.runtime;
      this.image = (args.image) ? args.image.medium : null;
      this.summary = args.summary;
    }
  }
}
