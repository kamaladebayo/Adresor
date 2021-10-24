import React from 'react';
import './App.css';
import About from './About';
import HomePage from './HomePage';
import Admin from './Admin';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* Homepage */}
      {/* <HomePage /> */}
      {/* About */}
      {/* <About /> */}
      {/* Archive */}
      {/* Admin */}
      {/* <Admin /> */}

      <Router>
        <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            {/* <Route path="/archive">
              <Archive
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
