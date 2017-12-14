import { Counter } from '../../models/counter.model';

export interface CounterState {
    counter: number;
}

export const initialState: CounterState = {
    counter: 0
};
