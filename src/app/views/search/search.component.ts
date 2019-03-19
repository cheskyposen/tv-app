import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../models/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'tvmaze search';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
