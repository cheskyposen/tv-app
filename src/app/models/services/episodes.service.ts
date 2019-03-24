import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Episode} from '../episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  url = 'http://api.tvmaze.com/shows/';

  constructor(private http: HttpClient) { }

  getEpisodes(id: string): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.url + id + '/episodes');
  }
}
