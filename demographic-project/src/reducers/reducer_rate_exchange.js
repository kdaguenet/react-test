

const initialState = {
    rateExchangeList: []
}

export default function(rateExchangeReducer = initialState, action) {
    switch (action.type) {
        case 'GET_RATE_EXCHANGE' :
            return  {
                ... initialState,
                rateExchangeList : [
                    action.payload,
                    ...rateExchangeReducer.rateExchangeList
                ]
            }
        default: return rateExchangeReducer
    }
}