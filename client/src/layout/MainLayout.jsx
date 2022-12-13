import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../sharedComponents/Footer/Footer";
import NavBar from "../sharedComponents/NavBar/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
