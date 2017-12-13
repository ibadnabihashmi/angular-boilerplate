import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: Todo;

  @Input() editTodo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {
    this.todo = new Todo('', '', '', '');
  }

  ngOnInit() {
    this.todoService.getTodo(this.route.snapshot.paramMap.get('id'))
    .subscribe((_todo) => {
      this.todo = _todo;
      this.editTodo = _todo;
    });
  }

  saveTodo() {
    console.log(this.editTodo);
  }
}
