import React from 'react';
import { Container, Button, Grid } from '@material-ui/core/';
import Title from './components/Title';
import Section from './components/section/Section';
import AuthenticationOptions from './components/authenticationOptions/AuthenticationOptions';

function App() {

  return (
    <Section name="main">
      <Container fixed>
        <Grid container justify="center">
          <Grid item xs={12}>
            <AuthenticationOptions />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default App;
