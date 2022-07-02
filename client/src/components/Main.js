import React, { useState } from "react";
//components
import Login from "../components/Login";
import Signup from "../components/Signup";
import Welcome from "../components/Welcome";
//axios
import axios from "axios";

const Main = () => {
  //state
  const [login, setLogin] = useState(false);
  const [logerr, setLogErr] = useState(false);
  const [sign, setSign] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [users, setUsers] = useState("");
  const [userexists, setUserExists] = useState(false);
  const [inputlength, setInputLength] = useState(false);

  //sign up for an account
  const goToSignUp = () => {
    setSign(true);
  };

  //back to login page
  const backToLogIn = () => {
    setSign(false);
  };

  //add user to db
  const addUser = () => {
    axios
      .post("http://localhost:3001/add", {
        username: username,
        password: password,
      })
      .then((error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
  };

  //get users from db
  const getUsers = () => {
    axios.get("http://localhost:3001/users").then((response) => {
      setUsers(response.data);
      response.data.map((user) =>
        user.username === username && user.password === password
          ? setLogin(true)
          : setLogErr(true)
      );
    });
  };

  //log in
  const logIn = (e) => {
    e.preventDefault();
    getUsers();
  };

  //log out
  const logOut = () => {
    setLogin(false);
    setLogErr(false);
    window.location.reload();
  };

  //create account/sign up
  const createAccount = (e) => {
    //user input requirements
    const userLength = username.length >= 3;
    const passLength = password.length >= 5;
    const checkUser = [];

    e.preventDefault();

    //get users from db and check if user already exists
    axios.get("http://localhost:3001/users").then((response) => {
      setUsers(response.data);
      response.data.map((user) =>
        user.username === username ? checkUser.push(username) : ""
      );
      //create account or alert input error
      if (checkUser.length === 0 && userLength && passLength) {
        addUser();
        backToLogIn();
        alert("You have successfully created an account. You may now log in.");
        setUserExists(false);
        setInputLength(false);
      } else if (checkUser.length !== 0) {
        setUserExists(true);
      } else if (!userLength || !passLength) {
        setInputLength(true);
      }
    });
  };

  return (
    <div className="main" users={users}>
      {sign || login ? (
        ""
      ) : (
        <Login
          setUserName={setUserName}
          setPassWord={setPassWord}
          logIn={logIn}
          goToSignUp={goToSignUp}
          logerr={logerr}
        />
      )}
      {sign ? (
        <Signup
          setUserName={setUserName}
          setPassWord={setPassWord}
          createAccount={createAccount}
          backToLogIn={backToLogIn}
          userexists={userexists}
          inputlength={inputlength}
        />
      ) : (
        ""
      )}
      {login ? <Welcome username={username} logOut={logOut} /> : ""}
    </div>
  );
};

export default Main;
