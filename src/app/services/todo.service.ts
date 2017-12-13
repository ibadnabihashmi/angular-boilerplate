import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Todo } from '../models/todo.model';
import { todos } from '../models/mock.todo';

@Injectable()
export class TodoService {
    constructor(
        private http: HttpClient
    ) { }

    getTodos(): Observable<any> {
        return of(todos);
    }

    getTodo(id: string) {
        const todo = todos.filter(_todo => id === _todo.id)[0];
        return of(todo);
    }
}
