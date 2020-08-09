import { Button } from '@material-ui/core/';
import React from 'react';
import { Link } from "react-router-dom";
import UserService from '../../services/UserService';

const userService = new UserService();

export default function AuthButton({ isLoggedIn, changeLoggedIn }) {
    let authButton;

    let logout = async () => {
        await userService.logoutUser();
        changeLoggedIn(false);
    }

    if (isLoggedIn) {
        authButton = (
            <Link to='/' onClick={logout}>
                <Button color="inherit">Logout</Button>
            </Link>
        );
    } else {
        authButton = (
            <Link to='/login'>
                <Button color="inherit">Login</Button>
            </Link>
        );
    }

    return (
        <>
            {authButton}
        </>
    );
};
