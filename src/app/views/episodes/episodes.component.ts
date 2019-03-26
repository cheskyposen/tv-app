import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Episode} from '../../models/Episode';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {Season} from '../../models/Season';
import {DataService} from '../../models/services/data.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {
  @Input() season: Season;
  constructor(
    private dataService: DataService
  ) {
    this.dataService.tvshows.subscribe((res) => { this.season.episodes = res; });
  }

  ngOnInit() {
    while (this.season.id === undefined) {
      this.dataService.getEpisodes(this.season.id);
      debounceTime(500);
    }
  }

  // getEpisodes() {
  //   // const id = +this.route.snapshot.paramMap.get('id');
  //   const id = this.seasons[0].id;
  //   this.tvmazeService.getEpisodes(id).subscribe(episode => { this.episodes = episode; });
  // }
}
