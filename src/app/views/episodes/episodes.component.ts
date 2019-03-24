import { Component, OnInit } from '@angular/core';
import {EpisodesService} from '../../models/services/episodes.service';
import {ActivatedRoute} from '@angular/router';
import {Episode} from '../../models/episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[];
  constructor(
    private episodesService: EpisodesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    const id = this.route.snapshot.paramMap.get('id');
    this.episodesService.getEpisodes(id).subscribe(episode => { this.episodes = episode; });
  }
}
