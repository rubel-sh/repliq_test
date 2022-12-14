import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("repliqToken");
  if (!token) {
    return <Navigate to="/register" />;
  }
  return children;
};

export default PrivateRoute;
