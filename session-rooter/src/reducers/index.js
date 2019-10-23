import {combineReducers} from 'redux';
import AuthentificationReducer from './authentificationReducer'
import ActionInfoReducer from './actionInfoReducer'

const rootReducer = combineReducers({
    actionInfo: ActionInfoReducer,
    authentication: AuthentificationReducer
});

export default rootReducer;
