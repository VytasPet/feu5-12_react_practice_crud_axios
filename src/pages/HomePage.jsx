import React from 'react';
import Container from '../components/ui/Container';
import Alert from './../components/ui/Alert';
import Feedback from '../components/ui/Feedback';
import Grid from '../components/ui/grid/Grid';

function HomePage() {
  return (
    <Container>
      <Grid>
        <Alert>Normal</Alert>
        <Alert type={'danger'}>Ivyko klaida</Alert>
        <Alert type={'success'}>success</Alert>
      </Grid>
      <Feedback show={true} type={'success'}>
        Sekme
      </Feedback>
      <h1>HomePage</h1>
      <p>Welcome to HomePage</p>
    </Container>
  );
}

export default HomePage;
