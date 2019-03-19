import {Movie} from './Movie';

export class Show {
  score: number;
  show: Movie;

  constructor(id: number, show: Movie) {
    this.score = id;
    this.show = show;
  }
}
