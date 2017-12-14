import { counterReducer } from './counter.reducer';
import { CounterState } from '../state/counter.state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    counter: CounterState;
}

export const reducer: ActionReducerMap<AppState> = {
    counter: counterReducer
};
