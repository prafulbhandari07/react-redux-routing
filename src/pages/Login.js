import React, { useState } from "react";
import { users } from "../Users";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleLoginClick(e) {
    e.preventDefault();
    let validCredentials = false;

    for (let i = 0; i < users.length; i++) {
      if (username === users[i].user && password === users[i].password) {
        validCredentials = true;
        break;
      }
    }

    if (validCredentials) {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      <div id="loginCont">
        <div id="loginCard">
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              placeholder="Enter your username here"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password here"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLoginClick}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
