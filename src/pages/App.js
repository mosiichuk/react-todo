import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import AuthenticationOptionsPage from './AuthenticationOptionsPage';
import MenuBar from '../components/menuBar/MenuBar';
import HelloPage from './HelloPage';
import './App.css'

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') && localStorage.getItem('user'));

  return (
    <Router basename="/react-todo/">
      <MenuBar changeLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      
      <Switch>
        <Route exact path="/">
          <HelloPage />
        </Route>
        <Route path="/login">
          <AuthenticationOptionsPage changeLoggedIn={setIsLoggedIn}/>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
