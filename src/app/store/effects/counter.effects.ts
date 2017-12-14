import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { CounterService } from '../../services/counter.service';
import * as CounterActions from '../actions/counter.actions';
import { query } from '@angular/core/src/animation/dsl';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class CounterEffects {
    constructor(
        private counterService: CounterService,
        private actions$: Actions
    ) {}

    @Effect() initialize$: Observable<Action> = this.actions$
    .ofType(CounterActions.INITIALIZE)
    .pipe(
        switchMap(() => {
            return this.counterService.iniializeCounter()
            .pipe(
                map((results) => {
                    return new CounterActions.DoneInitialize(results);
                })
            );
        })
    );

    @Effect() increment$: Observable<Action> = this.actions$
    .ofType(CounterActions.INCREMENT)
    .pipe(
        switchMap(() => {
            return this.counterService.incrementCounter()
            .pipe(
                map((results) => {
                    return new CounterActions.DoneIncrement(results);
                })
            );
        })
    );

    @Effect() decrement$: Observable<Action> = this.actions$
    .ofType(CounterActions.DECREMENT)
    .pipe(
        switchMap(() => {
            return this.counterService.decrementCounter()
            .pipe(
                map((results) => {
                    return new CounterActions.DoneDecrement(results);
                })
            );
        })
    );
}
