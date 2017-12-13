import { Todo } from '../../models/todo.model';
import { initialState } from '../state/app.state';
import * as TodoActions from '../actions/todo.actions';

export function todoReducer1(state = initialState, action: TodoActions.Actions) {
    switch (action.type) {
        case TodoActions.ADD_TODO: {
            return state;
        }

        case TodoActions.DELETE_TODO: {
            return state;
        }

        case TodoActions.EDIT_TODO: {
            return state;
        }

        case TodoActions.VIEW_TODO: {
            return state;
        }

        default: {
            return state;
        }
    }
}
