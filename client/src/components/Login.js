import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then(res => {
        console.log("Login Results", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => {
        console.error("Login Error", err.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={login.name}
          onChange
          {...handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={login.name}
          onChange
          {...handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
