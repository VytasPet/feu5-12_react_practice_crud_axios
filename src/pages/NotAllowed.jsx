import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';

function NotAllowed() {
  return (
    <Container>
      <h1>NotAllowed</h1>
      <p>Please login to see this content</p>
      <Link to={'/login'}>Login heer</Link>
    </Container>
  );
}

export default NotAllowed;
