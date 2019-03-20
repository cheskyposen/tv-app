import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'tvmaze search';

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
