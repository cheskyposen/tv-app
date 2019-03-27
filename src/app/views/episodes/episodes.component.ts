import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {Season} from '../../models/Season';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EpisodesComponent implements OnInit {
  @Input() season: Season;
  columnsToDisplay: string[] = [ 'image', 'name', 'airdate' ];

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
