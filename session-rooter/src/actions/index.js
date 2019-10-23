import { SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT } from './actions-types'

export function setAuthentification (isLoggedIn) {
    return function (dispatch) {
        dispatch({
            type: SET_AUTHENTIFICATION,
            payload: isLoggedIn
        })
    }
}

export function incrementActionCount () {
    return {
        type: INCREMENT_ACTION_COUNT
    }
}