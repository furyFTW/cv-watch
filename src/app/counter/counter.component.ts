import { Component, OnInit } from '@angular/core';
import { AppActions } from '../actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter: any[];

  @select(state => state.counter) counter$: Observable<any>;

  constructor(protected actions: AppActions) {
    this.actions.rehydrate();
  }

  public ngOnInit() {
    this.counter$.subscribe(num => this.counter = num);
  }

  public addCounter(): void {
    this.actions.onAddCounter({});
  }

  public removeCounter(): void {
    this.actions.onRemoveCounter({});
  }
}
