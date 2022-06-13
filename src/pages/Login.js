import React, { useState } from "react";
import "../css/Register.css";
import AuthUseContext from "../hooks/AuthUseContext";

const Login = () => {
  const { signIn } = AuthUseContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value) => {
    console.log(value);
    setEmail(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  const giris = () => {
    signIn(email, password);
  };

  return (
    <div className="container">
      <div className="ui form">
        <div className="ui input ">
          <input
            placeholder="Enter your e-mail..."
            onChange={(e) => {
              onChangeEmail(e.target.value);
            }}
          />
        </div>

        <div className="ui input">
          <input
            placeholder="Enter your password..."
            onChange={(e) => {
              onChangePassword(e.target.value);
            }}
          />
        </div>

        <div className="register">
          <div>
            <button
              className="ui black button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                giris();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
