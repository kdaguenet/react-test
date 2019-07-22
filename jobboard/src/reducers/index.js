import {combineReducers} from 'redux';
import ReducerPost from "./reducerPost"
import reducerActivePost from "./reducerActivePost"
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    posts: ReducerPost,
    activePost: reducerActivePost,
    form: formReducer
});

export default rootReducer;
