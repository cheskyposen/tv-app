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
export class TvMazeService {
  baseUrl = 'http://api.tvmaze.com/';

  constructor(private http: HttpClient) { }
  // function calls api and returns observable array of show
  getShows(search: string): Observable<Show[]> {
    return this.http.get(this.baseUrl + 'search/shows?q=' + search).pipe(
      map(result => (result as any[]).map(item => new Show(item.show)))
    );
  }
  // gets back previous and next episode
  getEpisode(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }
  // function calls api and returns observable object of show
  getShow(id: number): Observable<Show> {
    return this.http.get<Show>(this.baseUrl + 'shows/' + id);
  }
  // function calls api and returns observable array of season
  getSeasons(id: number): Observable<Season[]> {
    return this.http.get<Season[]>(this.baseUrl + 'shows/' + id + '/seasons').pipe(
      map(result => (result as any[]).map(item => new Season(item)))
    );
  }
  // function calls api and returns observable array of episode
  getEpisodes(id: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.baseUrl + 'seasons/' + id + '/episodes').pipe(
      map(result => (result as any[]).map(item => new Episode(item)))
    );
  }
}
