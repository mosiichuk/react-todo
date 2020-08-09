import {
  AppBar,
  Typography,
  Toolbar,
  Container
} from '@material-ui/core/';
import React from 'react';
import { Link } from "react-router-dom";
import './MenuBar.css';
import AuthButton from '../authButton/AuthButton';

const MenuBar = ({isLoggedIn, changeLoggedIn}) => {

  return (
    <AppBar position="static" >
      <Container>
        <Toolbar className="menu-bar">
          <Link to="/">
            <Typography variant="h6" className="" >
              React TODO
            </Typography>
          </Link>

          <AuthButton changeLoggedIn={changeLoggedIn} isLoggedIn={isLoggedIn}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MenuBar;