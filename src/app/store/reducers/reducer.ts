import { todoReducer } from './todo.reducer';
import { todoReducer1 } from './todo1.reducer';
import { State as _State } from '../state/app.state';
import { State1 as _State1 } from '../state/app.state1';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
    todo: _State;
    todo1: _State1;
}

export const reducer: ActionReducerMap<State> = {
    todo: todoReducer,
    todo1: todoReducer1
};
