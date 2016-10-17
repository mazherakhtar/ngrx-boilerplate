import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import {QuestionModel} from '../common/interfaces'
import {question, getAnswerChoices} from './content-item';

export interface AppState {
    question: QuestionModel
}

const myReducers = {question};
export const rootReducer = combineReducers(myReducers);

export function getQuestionState() {
    return (state$: Observable<AppState>) => state$
        .select(s => s.question);
}

export function getAnswerChoicesFromContentItem() {
    return compose(getAnswerChoices(), getQuestionState());
}