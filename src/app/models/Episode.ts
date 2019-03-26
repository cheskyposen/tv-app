import {Image} from './shows/Image';
import {Time} from '@angular/common';

export class Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: Date;
  airtime: Time;
  airstamp: Date;
  runtime: number;
  image: Image;
  summary: string;
}
