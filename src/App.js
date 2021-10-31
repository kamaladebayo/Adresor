import React from 'react';
import './App.css';
import About from './About';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from './Archive';
import Venue from './Venue';

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
            <Route path="/archive">
              <Archive />
            </Route>
            <Route path="/venue">
              <Venue />
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
