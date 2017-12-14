import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../../models/counter.model';
import { CounterService } from '../../services/counter.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/reducer';
import * as CounterActions from '../../store/actions/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
    this.counter$ = store.select(state => state.counter.counter);
  }

  ngOnInit() {
    console.log("Initializing");
    this.store.dispatch(new CounterActions.Initialize());
    console.log("Initialized");
    console.log(this.counter$);
  }

  increment() {
    console.log("Incrementing");
    this.store.dispatch(new CounterActions.Increment());
    console.log(this.counter$);
  }

  decrement() {
    console.log("Decrementing");
    this.store.dispatch(new CounterActions.Decrement());
    console.log(this.counter$);
  }
}
