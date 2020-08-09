import { Container } from '@material-ui/core/';
import React from 'react';
import logo from '../assets//logo.svg';

export default function HelloPage() {

    return (
        <Container>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-link">
                        React Todo list app
                    </p>
                </header>
            </div>
        </Container>
    );
}
