import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { TodoService } from '../../services/todo.service';
import { FETCH_TODOS } from '../actions/todo.actions';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class TodoEffects {
    constructor(
        private todoService: TodoService,
        private actions$: Actions
    ) {}

    @Effect()
    fetchTodos$: Observable<Action> = this.actions$
    .ofType(FETCH_TODOS)
    .map(toPayload)
    .switchMap(query => {
        return this.todoService.getTodos()
        .map(results => new)
    })
}
