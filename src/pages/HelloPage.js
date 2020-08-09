import { Container, Typography } from '@material-ui/core/';
import React from 'react';
import logo from '../assets//logo.svg';

export default function HelloPage() {

    return (
        <Container>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Typography variant="h5" >
                        Hi, this is simple To-Do list React app
                    </Typography>
                    <Typography>
                        Please login to proceed
                    </Typography>
                </header>
            </div>
        </Container>
    );
}
