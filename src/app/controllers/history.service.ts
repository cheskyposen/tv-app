import { Injectable } from '@angular/core';
import {Session} from '../models/Session';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService implements Session {
  history: Subject<any[]> = new Subject<any[]>();
  constructor() { }

  get session() {
    return this.history;
  }

  logHistory(data: any) {
    this.history.next(data);
  }
}
