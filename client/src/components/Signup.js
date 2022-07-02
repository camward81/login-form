import React from "react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Signup = ({
  setUserName,
  setPassWord,
  createAccount,
  userexists,
  inputlength,
  backToLogIn,
}) => {
  return (
    <div className="signup">
      <div className="header">
        <FontAwesomeIcon icon={faUserPlus} className="icon" />
        <h1>Sign Up</h1>
      </div>
      <form>
        <div className="user">
          <label forhtml="username">Choose a username:</label>
          <input
            name="username"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="pass">
          <label forhtml="password">Choose a password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassWord(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={createAccount}>
          Create Account
        </button>
      </form>
      {userexists ? (
        <p className="create-error">Username already exists</p>
      ) : (
        ""
      )}
      {inputlength ? (
        <p className="create-error">
          Username must have at least 3 characters. Password must have at least
          5.
        </p>
      ) : (
        ""
      )}
      <div className="go-back">
        <p className="question">Already have an account?</p>
        <p className="click-here" onClick={backToLogIn}>
          Log in.
        </p>
      </div>
    </div>
  );
};

export default Signup;
