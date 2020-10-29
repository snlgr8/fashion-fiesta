import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignUpSignInContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignUpSignInContainer>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </SignUpSignInContainer>
);

export default SignInAndSignUpPage;
