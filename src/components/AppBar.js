import React from "react";
import { Link, Outlet } from "react-router-dom";
import AuthUseContext from "../hooks/AuthUseContext";

const AppBar = () => {
  const { isAuthenticated } = AuthUseContext();
  return (
    <div>
      <nav>
        <ul>
          {isAuthenticated == true && (
            <>
              <button className="ui secondary button">
                <Link to="/home" style={{ color: "white" }}>
                  Home
                </Link>
              </button>
              <button className="ui secondary button">
                <Link to="/logout" style={{ color: "white" }}>
                  LogOut
                </Link>
              </button>
            </>
          )}

          {isAuthenticated == false && (
            <>
              <button className="ui secondary button">
                <Link to="/register" style={{ color: "white" }}>
                  Register
                </Link>
              </button>
              <button className="ui secondary button">
                <Link to="/login" style={{ color: "white" }}>
                  Login
                </Link>
              </button>
            </>
          )}
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default AppBar;
