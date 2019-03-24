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
  seasonsUrl = 'http://api.tvmaze.com/shows/';
  episodesUrl = 'http://api.tvmaze.com/seasons/';

  constructor(private http: HttpClient) { }

  getShows(search: string): Observable<Show[]> {
    return this.http.get(this.showsUrl + search).pipe(
      map(result => (result as any[]).map(item => new Show(item.show)))
    );
  }

  getSeasons(id: string): Observable<Season[]> {
    return this.http.get<Season[]>(this.seasonsUrl + id + '/seasons');
  }

  getEpisodes(id: string): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.episodesUrl + id + '/episodes');
  }
}
