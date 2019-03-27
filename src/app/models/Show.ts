import {Season} from './Season';

export class Show {
  id: number;
  name: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: Date;
  officialSite: string;
  rating: { average: number };
  image: { medium: string };
  summary: string;
  seasons: Season[];

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.language = args.language;
    this.genres = args.genres;
    this.status = args.status;
    this.runtime = args.runtime;
    this.premiered = args.premiered;
    this.officialSite = args.officialSite;
    this.rating = args.rating;
    this.image = args.image;
    this.summary = args.summary;
    this.seasons = args.seasons;
  }
}
