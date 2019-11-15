import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers';
import { MemoryRouter } from "react-router-dom"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class RootTest extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <MemoryRouter>
                    {this.props.children}
                </MemoryRouter>
            </Provider>
        )
    }
}

export default RootTest;