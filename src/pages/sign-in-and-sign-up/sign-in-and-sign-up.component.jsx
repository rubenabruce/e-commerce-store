import React from 'react';

import { SignInAndSignUpCont } from "./sign-in-and-sign-up.styles";

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
  <SignInAndSignUpCont>
    <SignIn/>
    <SignUp/>
  </SignInAndSignUpCont>
);

export default SignInAndSignUp;