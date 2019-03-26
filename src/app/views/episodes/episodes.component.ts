import { Component, OnInit, Input } from '@angular/core';
import {Episode} from '../../models/Episode';
import {DataService} from '../../models/services/data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  @Input() id: number;
  episodes: Episode[];
  columnsToDisplay = [ 'image', 'name', 'airdate' ];
  expandedElement: Episode | null;
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
      this.dataService.tvmazeService.getEpisodes(this.id).subscribe((res) => { this.episodes = res; });
  }

  // getEpisodes() {
  //   // const id = +this.route.snapshot.paramMap.get('id');
  //   const id = this.seasons[0].id;
  //   this.tvmazeService.getEpisodes(id).subscribe(episode => { this.episodes = episode; });
  // }
}
