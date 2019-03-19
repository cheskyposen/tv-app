export class Network {
  id: number;
  name: string;
  country: Country;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.country = args.country;
  }
}
