import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {visibilityFilter, todos, TodosEffects} from './store/reducers';

import { TodosDataService } from './services/todos-data.service';

import { TodoApp } from './app.component';

import { FilterSelect } from './components/filter-select';
import { TodoInput } from './components/todo-input';
import { TodoList } from './components/todo-list';

@NgModule({
  declarations: [
    TodoApp,
    FilterSelect,
    TodoInput,
    TodoList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({visibilityFilter, todos}),
     /**
     * runEffects configures all providers for @ngrx/effects. Observables decorated
     * as an @Effect() within the supplied services will ultimately be merged,
     * with output of relevant (registered as effects) actions being
     * dispatched into your application store. Any side-effects in
     * your application should be registered as effects.
     *
     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
     */
    EffectsModule.run(TodosEffects)
  ],
  providers: [TodosDataService],
  bootstrap: [TodoApp]
})
export class AppModule { }
