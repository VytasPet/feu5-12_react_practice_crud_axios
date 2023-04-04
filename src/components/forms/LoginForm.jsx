import React from 'react';
import { SubmitButton } from '../ui/Button.styled';
import { useFormik } from 'formik';

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('form values ===', values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <SubmitButton>Login</SubmitButton>
      </form>
      <div>
        <p>email: {formik.values.email}</p>
        <p>password: {formik.values.password}</p>
      </div>
    </>
  );
}

export default LoginForm;
