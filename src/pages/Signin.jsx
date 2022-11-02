import React from 'react';

import { GoogleButton } from 'react-google-button';
import "../App.css";
import MainNavbar from "../components/MainNavbar";
import {UserAuth} from "../context/AuthContext"

function Signin() {
  const {googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <GoogleButton onClick= {handleGoogleSignIn} />
      <h2>Allo!</h2>
    </div>
  );
}

export default Signin;
