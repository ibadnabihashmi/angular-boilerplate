import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/reducer';
import { FetchTodos } from '../../store/actions/todo.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: Observable<Todo[]>;

  @Input() newTodo: Todo;

  constructor(
    private store: Store<State>
  ) {
    this.todos = this.store.select(state => state.todo.todos);
    this.newTodo = new Todo('4', '' , '', '');
  }

  ngOnInit() {
    console.log("Initializing");
    this.store.dispatch(new FetchTodos());
    console.log("Initialized");
    console.log(this.todos);
  }

  deleteTodo(id: string) {
    console.log(id);
  }

  saveNewTodo() {
    console.log(this.newTodo);
  }
}
