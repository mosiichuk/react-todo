import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  Container
} from '@material-ui/core/';
import React from 'react';
import { Link } from "react-router-dom";
import './ManuBar.css';
import LoginButton from '../LoginButton/LoginButton';

export default function MenuBar() {

  return (
    <AppBar position="static" >
      <Container>
        <Toolbar className="menu-bar">
          <Link to="/">
            <Typography variant="h6" className="" >
              React TODO
            </Typography>
          </Link>

          <LoginButton/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
