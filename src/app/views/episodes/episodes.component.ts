import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {Season} from '../../models/Season';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  @Input() season: Season;
  columnsToDisplay: string[] = [ 'title', 'summary', 'aired' ];

  constructor(
    private tvmazeService: TvmazeService
  ) {}

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.tvmazeService.getEpisodes(this.season.id).subscribe(results => { this.season.episodes = results; });
  }
}
