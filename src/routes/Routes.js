import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/AppBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Guard from "../guard/Guard";
import Logout from "../pages/Logout";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route
          path="about"
          element={
            <Guard>
              <About />
            </Guard>
          }
        />
        <Route path="logout" element={<Logout />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
