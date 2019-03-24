import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {TvShow} from '../../models/TvShow';
import {TvmazeService} from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows$: Observable<TvShow[]>;
  private searchTerms = new Subject<string>();

  constructor(private tvmazeService: TvmazeService) {}
  ngOnInit() {
    this.shows$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.tvmazeService.getShows(term)),
    );
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
