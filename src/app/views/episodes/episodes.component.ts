import {Component, OnInit, Input} from '@angular/core';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {Season} from '../../models/Season';
import * as moment from 'moment';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  @Input() season: Season;
  @Input() checked: boolean;
  columnsToDisplay: string[] = [ 'title', 'summary', 'aired' ];

  constructor(
    private tvMazeService: TvMazeService
  ) {}

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.tvMazeService.getEpisodes(this.season.id).subscribe(results => { this.season.episodes = results; });
  }

  showSpoilers(date: any) {
    return !this.checked && moment().isBefore(date);
  }
}
