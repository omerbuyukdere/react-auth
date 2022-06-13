import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import AuthUseContext from "../hooks/AuthUseContext";

const Guard = ({ children }) => {
  const { isAuthenticated } = AuthUseContext();
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Guard;
