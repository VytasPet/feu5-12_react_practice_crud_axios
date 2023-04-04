import React, { useState } from 'react';
import { SubmitButton } from '../ui/Button.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import { InputField } from '../ui/InputComps';

const url = 'https://reqres.in/api/login';

const ErrorMsg = styled.p`
  color: tomato;
`;

function LoginForm() {
  const [beError, setBeError] = useState('');

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
      // clear errors
      setBeError('');
      // siusti prisijungimui
      sendLoginData(values);
    },
  });
  // console.log('formik.errors ===', formik.errors);

  function sendLoginData(loginObj) {
    axios
      .post(url, loginObj)
      .then((resp) => {
        console.log('resp ===', resp);
        // irasom i contexta email, token
      })
      .catch((err) => {
        console.warn('sendLoginData error', err);
        console.log('err.response.data.error ===', err.response.data.error);
        setBeError(err.response.data.error);
      });
  }

  return (
    <>
      {beError && <ErrorMsg>{beError}</ErrorMsg>}
      <form onSubmit={formik.handleSubmit}>
        <InputField
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          label="Email"
          name="email"
          error={formik.touched.email && formik.errors.email}
        />
        {/* {formik.touched.email && formik.errors.email && (
          <ErrorMsg>{formik.errors.email}</ErrorMsg>
        )} */}

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
