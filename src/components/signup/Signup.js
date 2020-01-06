import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up with your credentials</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
            label="Display Name"
          />

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

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
            label="Confirm Password"
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
