import {
    AppBar,
    Button,
    Typography,
    Toolbar,
    Container
} from '@material-ui/core/';
import React from 'react';
import { Link } from "react-router-dom";

export default function LoginButton() {

    let isLoggedIn = localStorage.getItem('token') && localStorage.getItem('user');

    return (
        <Link to={ isLoggedIn ? '/logout' : '/login'}>
            <Button color="inherit"> { isLoggedIn ? 'Logout' : 'Login'} </Button>
        </Link>
    );
};
