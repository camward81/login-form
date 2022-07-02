import React from "react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Login = ({ setUserName, setPassWord, logIn, goToSignUp, logerr }) => {
  return (
    <div className="login">
      <div className="header">
        <FontAwesomeIcon icon={faRightToBracket} className="icon" />
        <h1>Log In</h1>
      </div>
      <form>
        <div className="user">
          <label forhtml="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="pass">
          <label forhtml="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassWord(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={logIn}>
          Log In
        </button>
      </form>
      {logerr ? <p className="logerr">Invalid username/password</p> : ""}
      <div className="sign-up">
        <p className="question">Don't have an account?</p>
        <p className="click-here" onClick={goToSignUp}>
          Sign up.
        </p>
      </div>
    </div>
  );
};

export default Login;
