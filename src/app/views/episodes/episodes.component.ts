import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Episode} from '../../models/Episode';
import {TvmazeService} from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[];
  constructor(
    private tvmazeService: TvmazeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tvmazeService.getEpisodes(id).subscribe(episode => { this.episodes = episode; });
  }
}
