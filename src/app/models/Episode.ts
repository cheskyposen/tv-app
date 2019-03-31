import * as moment from 'moment';

export class Episode {
  id: number;
  name: string;
  number: number;
  airDate: any;
  runtime: number;
  image: { medium: string };
  summary: string;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.number = args.number;
    this.airDate = moment(args.airdate + 'T' + args.airtime, moment.HTML5_FMT.DATETIME_LOCAL);
    this.runtime = args.runtime;
    this.image = args.image;
    this.summary = args.summary;
  }
}
