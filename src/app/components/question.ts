import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "@angular/core";
import {QuestionModel} from "../common/interfaces";

@Component({
    selector: 'question',
    template: `  
        <div>
            <div>{{questionModel.stimulus}}</div>
            <div>{{questionModel.questionStem}}</div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Question{
    @Input() questionModel : QuestionModel;
}