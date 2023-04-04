import React from 'react';
import { SubmitButton } from '../ui/Button.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const ErrorMsg = styled.p`
  color: tomato;
`;

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(4).trim().required(),
    }),
    onSubmit: (values) => {
      console.log('form values ===', values);
    },
  });
  console.log('formik.errors ===', formik.errors);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="Email"
          name="email"
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMsg>{formik.errors.email}</ErrorMsg>
        )}

        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          placeholder="Password"
          name="password"
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorMsg>{formik.errors.password}</ErrorMsg>
        )}
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
