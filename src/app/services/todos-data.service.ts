import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs';

@Injectable()
export class TodosDataService {
    constructor(private http : Http){}

    loadTodos(){
        return this.http
            .get(`http://localhost:4000/todos`)
            .map(response => response.json());
    }

    addTodo(todo){
        return this.http
            .post(`http://localhost:4000/todos/`, todo)
            .map(response => response.json());
    }

    toggleTodo(id){
        return this.http
            .put(`http://localhost:4000/todos/` + id, null);
    }

    removeTodo(id){
        return this.http
            .delete(`http://localhost:4000/todos/` + id);
    }
}