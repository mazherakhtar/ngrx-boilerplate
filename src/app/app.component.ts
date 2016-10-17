import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {QuestionModel, AnswerChoice} from "./common/interfaces";
import {LOAD_CONTENT_ITEM, SELECT_ANSWER_CHOICE} from "./common/actions";
import {getAnswerChoicesFromContentItem, getQuestionState} from "./store/index";
import {Observable} from "rxjs/Observable";
import "rxjs";

@Component({
	selector: `stui-app`,
	template: `
	<div id="layout" class="pure-g">
		<div class="sidebar pure-u-1 pure-u-md-1-4">
			<div class="header">
				<h1 class="brand-title">NgRx Store</h1>
				<h2 class="brand-tagline">Simple Test UI</h2>
			</div>
		</div>
		<div class="content pure-u-1 pure-u-md-3-4">
			<question
				[questionModel]="question$ | async">
			</question>
			<answer-choices [answerChoicesModel]="answerChoices$ | async"
							(answerSelected)="updateAnswerSelected($event)">
			</answer-choices>
		</div>
	</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StuiApp {
	public question$ : Observable<QuestionModel>;
	public answerChoices$ : Observable<AnswerChoice[]>;

	constructor(private _store : Store<any>){
		this.question$ = _store.let(getQuestionState());
		this.answerChoices$ = _store.let(getAnswerChoicesFromContentItem());
		_store.dispatch({ type: LOAD_CONTENT_ITEM, payload: {id:8675309} });
	}

	updateAnswerSelected(answerChoice : AnswerChoice){
		this._store.dispatch({type: SELECT_ANSWER_CHOICE, payload: { answerChoice }});
	}
}