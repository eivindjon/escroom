import React, { useEffect, useState } from "react";

import { GoogleButton } from "react-google-button";
import "../App.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signin() {
  const { googleSignIn, user } = UserAuth();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setUserLoggedIn = true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/minside");
    }
  });

  return (
    <div>
      <GoogleButton onClick={handleGoogleSignIn} />
      <h2>Allo!</h2>
    </div>
  );
}

export default Signin;
