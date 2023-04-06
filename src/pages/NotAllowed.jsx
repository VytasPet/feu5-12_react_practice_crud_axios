import React from 'react';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button.styled';

function NotAllowed() {
  return (
    <Container>
      <h1>Protected Page</h1>
      <p>Please login to see this content.</p>
      <Link to={'/login'}>
        <Button>Login here</Button>
      </Link>
    </Container>
  );
}

export default NotAllowed;
