import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../../models/counter.model';
import { CounterService } from '../../services/counter.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CounterState } from '../../store/state/counter.state';
import * as CounterActions from '../../store/actions/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter$: Observable<number>;

  constructor(
    private store: Store<CounterState>
  ) {
    this.counter$ = store.select<number>(state => state.counterReducer.counter);
  }

  ngOnInit() {
    this.store.dispatch(new CounterActions.Initialize());
  }

  increment() {
    this.store.dispatch(new CounterActions.Increment());
  }

  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }
}
