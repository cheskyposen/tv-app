import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: Subject<any[]> = new Subject<any[]>();
  constructor() { }

  logHistory(data: any) {
    this.history.next(data);
  }
}
