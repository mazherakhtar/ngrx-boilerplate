import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {AppState, getAnswerChoicesFromContentItem, getQuestionState, rootReducer} from './store/index';
import {ContentItemEffects} from './store/content-item-effects';
import { ContentItemDataService } from './services/content-item-data.service';
import { StuiApp } from './app.component';
import { Question } from './components/question';
import { AnswerChoices } from './components/answer-choices';

@NgModule({
  declarations: [
    StuiApp,
    Question,
    AnswerChoices
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    StoreModule.provideStore(rootReducer),
     /**
     * runEffects configures all providers for @ngrx/effects. Observables decorated
     * as an @Effect() within the supplied services will ultimately be merged,
     * with output of relevant (registered as effects) actions being
     * dispatched into your application store. Any side-effects in
     * your application should be registered as effects.
     *
     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
     */
    EffectsModule.run(ContentItemEffects)
  ],
  providers: [ContentItemDataService],
  bootstrap: [StuiApp]
})
export class AppModule { }