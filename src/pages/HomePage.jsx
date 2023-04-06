import React from 'react';
import Container from '../components/ui/Container';
import Alert from './../components/ui/Alert';

function HomePage() {
  return (
    <Container>
      <Alert>Normal</Alert>
      <Alert type={'danger'}>Ivyko klaida</Alert>
      <Alert type={'success'}>success</Alert>

      <h1>HomePage</h1>
      <p>Welcome to HomePage</p>
    </Container>
  );
}

export default HomePage;
