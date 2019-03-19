class Country {
  name: string;
  code: string;
  timezone: string;

  constructor(args?) {
    this.name = args.name;
    this.code = args.code;
    this.timezone = args.timezone;
  }
}
