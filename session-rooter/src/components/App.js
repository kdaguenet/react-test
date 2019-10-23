import React from 'react';
import Header from '../containers/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from "react-router-dom"
import Home from "./home";
import Ressources from "./ressources";
import RequireAuth from '../helpers/requireAuth'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ressources" component={RequireAuth(Ressources)}/>
      </Switch>
    </div>
  );
}

export default App;
