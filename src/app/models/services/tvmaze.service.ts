import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Season} from '../Season';
import {Episode} from '../Episode';
import {map} from 'rxjs/operators';
import {Show} from '../Show';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  showsUrl = 'http://api.tvmaze.com/search/shows?q=';
  showUrl = 'http://api.tvmaze.com/shows/';
  seasonUrl = 'http://api.tvmaze.com/seasons/';

  constructor(private http: HttpClient) { }

  getShows(search: string): Observable<Show[]> {
    return this.http.get(this.showsUrl + search).pipe(
      map(result => (result as any[]).map(item => new Show(item.show)))
    );
  }
  getShow(id: number): Observable<Show> {
    return this.http.get<Show>(this.showUrl + id + '?embed=nextepisode');
  }
  getSeasons(id: number): Observable<Season[]> {
    return this.http.get<Season[]>(this.showUrl + id + '/seasons').pipe(
      map(result => (result as any[]).map(item => new Season(item)))
    );
  }
  getEpisodes(id: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.seasonUrl + id + '/episodes').pipe(
      map(result => (result as any[]).map(item => new Episode(item)))
    );
  }
}
