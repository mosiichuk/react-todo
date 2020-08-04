import { Button } from '@material-ui/core/';
import React from 'react';
import { Link } from "react-router-dom";

export default function AuthButton(props) {

    return (
        <>
            {!props.isLoggedIn &&
                <Link to='/login'>
                    <Button color="inherit">Login</Button>
                </Link>
            }
            {props.isLoggedIn &&
                <Link to='/logout'>
                    <Button color="inherit">Logout</Button>
                </Link>
            }
        </>
    );
};
