import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { Physics } from './Physics';
import { Mathematics } from './Mathematics';
import { Literature } from './Literature';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/physics" component={Physics} />
          <Route path="/mathematics" component={Mathematics} />
          <Route path="/literature" component={Literature} />
        </Switch>
        <NavigationBar />
      </Router>
    </React.Fragment>
  );
}

export default App;
