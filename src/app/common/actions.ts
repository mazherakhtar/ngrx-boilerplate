/*
    I prefer to keep action constants in a single file.
    This allows you to, at a quick glance, see all relevant user interaction within your application.
    You could also keep actions with the appropriate reducers or export each action group seperately.
*/

//content item actions
export const LOAD_CONTENT_ITEM = 'LOAD_CONTENT_ITEM';
export const LOAD_CONTENT_ITEM_COMPLETE = 'LOAD_CONTENT_ITEM_COMPLETE';

//answer-choice actions
export const SELECT_ANSWER_CHOICE = 'SELECT_ANSWER_CHOICE';