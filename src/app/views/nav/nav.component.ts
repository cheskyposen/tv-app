import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {interval, Observable, timer} from 'rxjs';
import {map, take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  title = 'tvmaze search';
  now: number;
  counter$: Observable<number>;
  count = 60;
  constructor(private location: Location) {
    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count),
      takeUntil(this.onDestroyEvent)
    );
  }

  ngOnInit() {
    interval(1000).pipe(takeUntil(this.onDestroyEvent)).subscribe(() => { this.now = Date.now(); });
  }
  ngOnDestroy() {
    this.onDestroyEvent.emit();
  }
  goBack(): void {
    this.location.back();
  }
}
