import React from 'react';
import Container from '../components/ui/Container';
import { InputField } from '../components/ui/InputComps';

const inputsData = [
  { id: 1, type: 'text', label: 'Title', name: 'title' },
  { id: 2, type: 'texarea', label: 'Body', name: 'body' },
  { id: 3, type: 'text', label: 'Author', name: 'author' },
  { id: 4, type: 'text', label: 'Tags', name: 'tags' },
  { id: 5, type: 'text', label: 'Date', name: 'date' },
];

function NewPostPage() {
  // useFormik to controll the form
  return (
    <Container>
      <h1>NewPostPage</h1>
      <p>Welcome to NewPostPage</p>
      <form>
        {inputsData.map((iObj) => (
          <InputField
            key={iObj.id}
            type={iObj.type}
            label={iObj.label}
            name={iObj.name}
          />
        ))}
      </form>
    </Container>
  );
}

export default NewPostPage;
