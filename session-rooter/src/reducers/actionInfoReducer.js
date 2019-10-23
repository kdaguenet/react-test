import { INCREMENT_ACTION_COUNT } from '../actions/actions-types'

const initialState = {
    actionCount: 0
}

const ActionInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_ACTION_COUNT :
            return {
                actionCount: state.actionCount + 1
            };
        default :
            return state

    }
}

export default ActionInfoReducer