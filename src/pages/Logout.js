import React from "react";
import AuthUseContext from "../hooks/AuthUseContext";
import "../css/Logout.css";

const Logout = () => {
  const { logOut } = AuthUseContext();

  const logOuts = () => {
    logOut();
  };

  return (
    <div className="logout-container">
      <button
        style={{ textAlign: "center" }}
        className="ui black button"
        onClick={() => {
          logOuts();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
