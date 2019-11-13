import {AT_POSTS} from "../actions/actionTypes";

export default function reducerPost (state= [], action) {
    switch (action.type) {
        case AT_POSTS.READ_ALL :
            return action.payload;
        case AT_POSTS.DELETE :
            return state.filter((post) => {
                if(post.id === action.payload) {
                    return false;
                } else {
                    return true
                }
            })
        case AT_POSTS.CREATE :
            return [...state, action.payload]
        default :
            return state
    }
}