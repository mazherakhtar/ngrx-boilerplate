import {Injectable} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {TodosDataService} from "../services/todos-data.service";

import {
  ADD_TODO,
  ADD_TODO_COMPLETE,
  LOAD_TODOS,
  LOAD_COMPLETE,
  TOGGLE_TODO,
  TOGGLE_TODO_COMPLETE,
  REMOVE_TODO,
  REMOVE_TODO_COMPLETE
} from "../common/actions";

@Injectable()
export class TodosEffects {
  constructor(private _actions$: Actions,
              private _todosDataService: TodosDataService) { }

  @Effect() loadTodos$ = this._actions$
    .ofType(LOAD_TODOS)
    .flatMap((action) => (
      this._todosDataService.loadTodos()
        .map((data) => ({ type: LOAD_COMPLETE, payload: data })
      )));

  @Effect() addTodo$ = this._actions$
    .ofType(ADD_TODO)
    .flatMap((action) => (
      this._todosDataService.addTodo(action.payload)
        .map((data) => ({ type: ADD_TODO_COMPLETE, payload: data })
      )));

  @Effect() removeTodo$ = this._actions$
    .ofType(REMOVE_TODO)
    .flatMap((action) => (
      this._todosDataService.removeTodo(action.payload)
        .mapTo({ type: REMOVE_TODO_COMPLETE, payload: action.payload })
      ));

  @Effect() toggleTodo$ = this._actions$
    .ofType(TOGGLE_TODO)
    .flatMap((action) => (
      this._todosDataService.toggleTodo(action.payload)
        .mapTo({ type: TOGGLE_TODO_COMPLETE, payload: action.payload })
      ));
}