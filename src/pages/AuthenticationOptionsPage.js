import { Container, Grid, Box } from '@material-ui/core/';
import React from 'react';
import AuthenticationOptions from '../components/authenticationOptions/AuthenticationOptions';

export default function HelloPage() {

    return (
        <Container fixed>
            <Box mt={5}>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <AuthenticationOptions />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
