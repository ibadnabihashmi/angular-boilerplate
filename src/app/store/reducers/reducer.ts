import { todoReducer } from './todo.reducer';
import { State as _State } from '../state/app.state';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    todo: _State;
}

export const reducer: ActionReducerMap<State> = {
    todo: todoReducer
};
