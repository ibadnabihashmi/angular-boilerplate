import { Todo } from '../../models/todo.model';

export interface State {
    todo: Todo;
    todos: Todo[];
}

export const initialState: State = {
    todo: new Todo('', '', '', ''),
    todos: []
};
