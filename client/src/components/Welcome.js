import React from "react";

const Welcome = ({ username, logOut }) => {
  return (
    <div className="welcome">
      <div className="header">
        <h1 className="wel">Welcome, </h1>
        <h1 className="use">{username + " ;)"}</h1>
      </div>
      <button type="submit" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default Welcome;
