import { combineReducers } from 'redux';
import * as globalReducers from './ducks';
import * as screenReducers from './screens/reducers';

/**
 * Function _createReducer_ combines global reducers (reducers that are used in
 * multiple screen) and reducers that are handling actions happening inside one page container.
 * Since we combineReducers, screenReducers will get page specific key (e.g. SearchPage)
 * which is screen specific.
 * Future: this structure could take in asyncReducers, which are changed when you navigate screen.
 */
const rootReducer = combineReducers({ ...globalReducers, ...screenReducers });

export default rootReducer;
