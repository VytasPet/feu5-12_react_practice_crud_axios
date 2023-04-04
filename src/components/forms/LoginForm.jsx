import React from 'react';
import { SubmitButton } from '../ui/Button.styled';

function LoginForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <SubmitButton>Login</SubmitButton>
      </form>
    </div>
  );
}

export default LoginForm;
