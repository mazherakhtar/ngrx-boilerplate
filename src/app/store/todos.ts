import {ActionReducer, Action} from "@ngrx/store";
import {Todo} from "../common/interfaces";
import {ADD_TODO, ADD_TODO_COMPLETE, REMOVE_TODO_COMPLETE, TOGGLE_TODO_COMPLETE, LOAD_TODOS, LOAD_COMPLETE} from "../common/actions";

export const todos : ActionReducer<Todo[]> = (state : Todo[] = [], action: Action) => {
  console.log(state, action);

  switch(action.type) {
      case ADD_TODO_COMPLETE:
          return [
              ...state,
              action.payload
          ];

      case REMOVE_TODO_COMPLETE:
          return state.filter(todo => todo.id !== action.payload);

      case TOGGLE_TODO_COMPLETE:
          return state.map(todo => {
            if(todo.id !== action.payload){
               return todo;
            }
            return Object.assign({}, todo, {
                isCompleted: !todo.isCompleted
            });
          });

    //   case LOAD_TODOS:
    //       return [...state, action.payload];
      case LOAD_COMPLETE:
          return action.payload;
      default:
          return state;
  }
};

