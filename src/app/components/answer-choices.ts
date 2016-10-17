import {Component, Output, Input, EventEmitter} from "@angular/core";
import {AnswerChoice} from "../common/interfaces";

@Component({
    selector: 'answer-choices',
    template: `
        <div *ngFor="let answerChoice of answerChoicesModel">
            <label>
                <input type="radio" name="options" (click)="answerSelected.emit(answerChoice)" 
                [checked]="answerChoice.isSelected">
                {{answerChoice.text}}
            </label>
        </div>
  `

})
export class AnswerChoices{
    @Input() answerChoicesModel;
    @Output() answerSelected: EventEmitter<AnswerChoice> = new EventEmitter<AnswerChoice>();
}