import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {interval} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  // creates an event to unsubscribe when emitted
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  title = 'tvmaze search';
  time: number;
  constructor(private location: Location) {}
  // on init it subscribes to interval and init time every sec
  ngOnInit() {
    interval(1000).pipe(takeUntil(this.onDestroyEvent)).subscribe(() => { this.time = Date.now(); });
  }
  ngOnDestroy() {
    // unsubscribe from clock
    this.onDestroyEvent.emit();
  }
  // goes to previous page
  goBack(): void {
    this.location.back();
  }
}
