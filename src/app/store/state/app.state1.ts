import { Todo } from '../../models/todo.model';

export interface State1 {
    todo: Todo;
    todos: Todo[];
}

export const initialState: State1 = {
    todo: null,
    todos: []
};
