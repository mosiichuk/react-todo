import { AppBar, makeStyles, Button, Typography, Toolbar } from '@material-ui/core/';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, useRouteMatch
} from "react-router-dom";
import AuthenticationOptionsPage from './pages/AuthenticationOptionsPage';
import MenuBar from './components/MenuBar/MenuBar';
import HelloPage from './pages/HelloPage';
import './App.css'

function App() {

  return (
    <Router basename="/react-todo/">
      <MenuBar />
      <Switch>
        <Route exact path="/">
          <HelloPage />
        </Route>
        <Route path="/login">
          <AuthenticationOptionsPage />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
