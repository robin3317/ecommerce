import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase';
import { SigninContainer, ButtonContainer, SigninTitle } from './Signin.styles';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    await auth.signInWithEmailAndPassword(email, password);

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SigninContainer>
        <SigninTitle>I already have an account</SigninTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          <ButtonContainer>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleRegister>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </ButtonContainer>
        </form>
      </SigninContainer>
    );
  }
}

export default Signin;
