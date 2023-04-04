import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import Container from '../components/ui/Container';

function LoginPage() {
  return (
    <Container>
      <h1>Login here</h1>
      <p>Welcome to LoginPage</p>

      <LoginForm />
    </Container>
  );
}

export default LoginPage;
