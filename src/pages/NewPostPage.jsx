import React from 'react';
import Container from '../components/ui/Container';
import { InputField } from '../components/ui/InputComps';

const inputsData = [
  { id: 1, type: 'text', label: 'Email', name: 'email' },
  { id: 2, type: 'password', label: 'Password', name: 'password' },
];

function NewPostPage() {
  // useFormik to controll the form
  return (
    <Container>
      <h1>NewPostPage</h1>
      <p>Welcome to NewPostPage</p>
      <form>{/* map over input data and make InputField's */}</form>
    </Container>
  );
}

export default NewPostPage;
