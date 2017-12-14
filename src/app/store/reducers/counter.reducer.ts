import { Counter } from '../../models/counter.model';
import { initialState } from '../state/counter.state';
import * as CounterActions from '../actions/counter.actions';
import { ActionReducer } from '@ngrx/store';

export function counterReducer(state = initialState, action: CounterActions.Actions) {
    switch (action.type) {
        case CounterActions.INITIALIZE: {
            return state;
        }

        case CounterActions.DONE_INITIALIZE: {
            return {
                ...state,
                counter: action.value
            };
        }

        case CounterActions.INCREMENT: {
            return state;
        }

        case CounterActions.DONE_INCREMENT: {
            return {
                ...state,
                counter: action.value
            };
        }

        case CounterActions.DECREMENT: {
            return state;
        }

        case CounterActions.DONE_DECREMENT: {
            return {
                ...state,
                counter: action.value
            };
        }

        default: {
            return state;
        }
    }
}

