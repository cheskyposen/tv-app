import {Image} from './shows/Image';
import {Time} from '@angular/common';

export class Episode {
  id: number;
  name: string;
  number: number;
  airdate: Date;
  airtime: Time;
  airstamp: Date;
  runtime: number;
  image: Image;
  summary: string;
}
