import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const ADD_TODO = '[TODO] add todo';
export const DELETE_TODO = '[TODO] delete todo';
export const EDIT_TODO = '[TODO] edit todo';
export const VIEW_TODO = '[TODO] view todo';
export const FETCH_TODOS = '[TODO] fetch todos';

export class FetchTodos implements Action {
    readonly type = FETCH_TODOS;
}

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public todo: Todo) { }
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: string) { }
}

export class EditTodo implements Action {
    readonly type = EDIT_TODO;
}

export class ViewTodo implements Action {
    readonly type = VIEW_TODO;
}

export type Actions = AddTodo | DeleteTodo | EditTodo | ViewTodo
| FetchTodos;
