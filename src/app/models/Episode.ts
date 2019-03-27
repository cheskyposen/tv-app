import * as moment from 'moment';

export class Episode {
  id: number;
  name: string;
  number: number;
  airdate: any;
  runtime: number;
  image: { medium: string };
  summary: string;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.number = args.number;
    this.airdate = moment(args.airdate);
    this.runtime = args.runtime;
    this.image = args.image;
    this.summary = args.summary;
  }
}
