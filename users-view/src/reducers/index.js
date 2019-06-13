import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUserReducer from './reducer_active-user'

const rootReducer = combineReducers({
    users : UsersReducer,
    activeUser: ActiveUserReducer
});

export default rootReducer;