import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CounterService {
    constructor(
        private http: HttpClient
    ) { }

    iniializeCounter(): Observable<any> {
        return of(0);
    }

    incrementCounter(): Observable<any> {
        return of(1);
    }

    decrementCounter(): Observable<any> {
        return of(0);
    }
}
