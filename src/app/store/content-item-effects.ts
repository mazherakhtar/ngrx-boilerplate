import {Injectable} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {ContentItemDataService} from "../services/content-item-data.service";
import {LOAD_CONTENT_ITEM, LOAD_CONTENT_ITEM_COMPLETE} from "../common/actions";

@Injectable()
export class ContentItemEffects {
  constructor(private _actions$: Actions,
              private _contentItemDataService: ContentItemDataService) { }

  @Effect() loadContentItem$ = this._actions$
    .ofType(LOAD_CONTENT_ITEM)
    .flatMap((action) => {
      return (this._contentItemDataService.getContentItem(action.payload.id)
        .map((data) => ({ type: LOAD_CONTENT_ITEM_COMPLETE, payload: data })
    ))});
}