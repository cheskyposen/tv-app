import {Movie} from './show/Movie';

export class Show {
  score: number;
  show: Movie;

  constructor(id: number, show: Movie) {
    this.score = id;
    this.show = show;
  }
}
