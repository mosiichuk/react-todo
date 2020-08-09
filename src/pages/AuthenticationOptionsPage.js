import { Container, Grid, Box } from '@material-ui/core/';
import React from 'react';
import AuthenticationOptions from '../components/authenticationOptions/AuthenticationOptions';

export default function AuthenticationOptionsPage({changeLoggedIn}) {

    return (
        <Container fixed>
            <Box mt={5}>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <AuthenticationOptions changeLoggedIn={changeLoggedIn}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
