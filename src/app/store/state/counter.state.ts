import { Counter } from '../../models/counter.model';

export interface CounterState {
    counterReducer: {
        counter: number;
    };
}

export const initialState: CounterState = {
    counterReducer: {
        counter: 0
    }
};
