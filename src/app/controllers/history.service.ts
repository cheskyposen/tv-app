import { Injectable } from '@angular/core';
import {Session} from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class HistoryService implements Session {
  private history: Session;
  constructor() { }

  get session() {
    return this.history;
  }

  set session(value) {
    this.history = value;
  }
}
