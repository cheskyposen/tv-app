export class Schedule {
  time: number;
  days: Array<string>;

  constructor(args?) {
    this.time = args.time;
    this.days = args.days;
  }
}
