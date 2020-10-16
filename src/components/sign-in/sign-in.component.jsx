import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInCont, TitleCont, ButtonsCont } from "./sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.log(error);
    }


  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <SignInCont>
        <TitleCont>I already have an account</TitleCont>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            handleChange={this.handleChange} 
            value={this.state.email} 
            label='email' 
            required
          />
          <FormInput 
            name='password' 
            type='password' 
            handleChange={this.handleChange}
            value={this.state.password}
            label='password' 
            required
          />
          <ButtonsCont>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </ButtonsCont>
        </form>
      </SignInCont>
    )
  }
}

export default SignIn;