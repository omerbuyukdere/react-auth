import React, { useState } from "react";
import "../css/Register.css";
import { auth } from "../firebase/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value) => {
    console.log(value);
    setEmail(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  const kaydet = () => {
    if (true) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
                kaydet();
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
