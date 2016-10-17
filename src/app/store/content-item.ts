import '@ngrx/core/add/operator/select';
import {ActionReducer, Action} from "@ngrx/store";
import {Observable} from 'rxjs/Observable';

import {QuestionModel, AnswerChoice} from "../common/interfaces";
import {LOAD_CONTENT_ITEM, LOAD_CONTENT_ITEM_COMPLETE, SELECT_ANSWER_CHOICE} from "../common/actions";

var initialState = {id: 0, type: "question", interactionType: "samc", 
                     stimulus: "", questionStem: "", 
                     answerChoices: [], explanation: ""}

export const question : ActionReducer<QuestionModel> = (state : QuestionModel = initialState, action: Action) => {
  console.log("State before action:", state, action);

  switch(action.type) {
      case SELECT_ANSWER_CHOICE:
        return Object.assign({}, state, {answerChoices:answerChoiceReducer(state.answerChoices, action)});
      case LOAD_CONTENT_ITEM_COMPLETE:
        return action.payload;
      default:
        return state;
  }
};

export function getAnswerChoices() {
    return (state$: Observable<QuestionModel>) => state$
        .select(question => {
            return question.answerChoices;
        });
}

function answerChoiceReducer(answerChoices, action){
     return answerChoices.map(answerChoice => {
            if(answerChoice.label !== action.payload.answerChoice.label){
              return Object.assign({}, answerChoice, {
                isSelected: false
              });
            }

            return Object.assign({}, answerChoice, {
                isSelected: true
            });
          });
 }