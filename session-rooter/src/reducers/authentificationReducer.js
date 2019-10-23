import { SET_AUTHENTIFICATION } from '../actions/actions-types'

const initialState = {
    isLoggedIn: false
}

const authentificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTIFICATION :
            return {
                isLoggedIn: action.payload
            };
        default :
            return state

    }
}

export default authentificationReducer