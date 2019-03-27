import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {interval, Observable, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'tvmaze search';
  now: number;
  counter$: Observable<number>;
  count = 60;
  constructor(private location: Location) {
    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
  }

  ngOnInit() {
    interval(1000).subscribe(() => { this.now = Date.now(); });
  }

  goBack(): void {
    this.location.back();
  }
}
