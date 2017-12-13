import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { TodoService } from '../../services/todo.service';
import { FETCH_TODOS, FETCH_TODOS_DONE, FetchTodosDone } from '../actions/todo.actions';
import { query } from '@angular/core/src/animation/dsl';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class TodoEffects {
    constructor(
        private todoService: TodoService,
        private actions$: Actions
    ) {}

    @Effect()
    fetchTodos$: Observable<Action> = this.actions$
    .ofType(FETCH_TODOS)
    .pipe(
        map(toPayload),
        switchMap(query => {
            return this.todoService.getTodos()
            .pipe(
                map((results) => {
                    return new FetchTodosDone(results)
                })
            )
        })
    );
}
