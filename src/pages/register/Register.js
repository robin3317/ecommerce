import React from 'react';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';
import { RegisterContainer } from './Register.styles';

const Register = () => (
  <RegisterContainer>
    <Signin />
    <Signup />
  </RegisterContainer>
);

export default Register;
