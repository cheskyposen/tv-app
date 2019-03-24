export class Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;

  constructor(args?) {
    this.tvrage = args.tvrage;
    this.thetvdb = args.thetvdb;
    this.imdb = args.imdb;
  }
}
