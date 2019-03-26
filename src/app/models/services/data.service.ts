import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Show} from '../Show';
import {TvmazeService} from './tvmaze.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tvshows: Subject<any> = new Subject<any>();

  constructor(public tvmazeService: TvmazeService) {}

  getShows(name: string) {
    this.tvmazeService.getShows(name)
      .subscribe(shows => { this.tvshows.next(shows); });
  }

  getSeasons(name: string) {
    this.tvmazeService.getSeasons(name)
      .subscribe(seasons => { this.tvshows.next(seasons); });
  }

  getEpisodes(id: number) {
    this.tvmazeService.getEpisodes(id)
      .subscribe(episodes => { this.tvshows.next(episodes); });
  }
}
