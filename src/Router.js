import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoutes";

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/" element={<Login />} />
        <Route exact="/dashboard" element={<ProtectedRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    );
  }
}
