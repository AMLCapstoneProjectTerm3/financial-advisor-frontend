import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
//   const isAuthenticated = localStorage.getItem("user");
//   console.log("this", isAuthenticated);
const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;
