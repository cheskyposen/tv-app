import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../models/services/search.service';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'tvmaze search';
  search: string;
  movieTitles: Show[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  getHint(search) {
    this.searchService.getHint(search).subscribe(movie => { this.movieTitles = movie; });
  }
}
