import {Time} from '@angular/common';

export class Episode {
  id: number;
  name: string;
  number: number;
  airdate: Date;
  airtime: Time;
  airstamp: Date;
  runtime: number;
  image: { medium: string };
  summary: string;
}
