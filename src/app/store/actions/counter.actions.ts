import { Action } from '@ngrx/store';
import { Counter } from '../../models/counter.model';

export const INCREMENT = 'increment';
export const DONE_INCREMENT = 'done increment';
export const DECREMENT = 'decrement';
export const DONE_DECREMENT = 'done decrement';
export const INITIALIZE = 'initialize';
export const DONE_INITIALIZE = 'done init';

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class DoneIncrement implements Action {
    readonly type = DONE_INCREMENT;
    constructor(public value: number) {}
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class DoneDecrement implements Action {
    readonly type = DONE_DECREMENT;
    constructor(public value: number) {}
}

export class Initialize implements Action {
    readonly type = INITIALIZE;
}

export class DoneInitialize implements Action {
    readonly type = DONE_INITIALIZE;
    constructor(public value: number) {}
}

export type Actions = Initialize | Increment | Decrement
| DoneInitialize | DoneIncrement | DoneDecrement;
