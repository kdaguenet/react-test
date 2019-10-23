import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {actionCounter} from "./middlewares/actionCounter"
import reducers from './reducers';
import { BrowserRouter } from "react-router-dom"

const createStoreWithMiddleware = applyMiddleware(thunk, actionCounter)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));

serviceWorker.unregister();
