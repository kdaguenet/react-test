import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import UserList from './components/user-list'
import rootReducer from './reducers/index'
import UserDetails from './components/user-details'


const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <UserList/>
          <UserDetails/>
        </Provider>
    );
  }
}

export default App;
