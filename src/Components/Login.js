import { Button } from "@material-ui/core";
import React from "react";
import "../StyleSheets/Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "./../StateProvider";
import { actionTypes } from "../Reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://lh3.googleusercontent.com/proxy/3WXWtxMSmP8yWagUEWoRTSFYXdKFZvp0yqt1Mjz_eUVrX2dNl9hLBS2Rh4abODPwYXJJLnQ-NLz0uLcbuHJ_yuw-b4XWKDp0BWF3aVmTZc2CMTEBDpChZYO9jYyvbnrhuo0eM-yfob1TT-zt"
          alt=""
        />
        <img
          src="https://gc2018.com/sites/default/files/2018-03/Facebook-06-2015-Blue.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
