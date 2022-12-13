import React from "react";
import { Outlet } from "react-router-dom";
import FooterBottom from "../sharedComponents/Footer/FooterBottom";
import NavigationBar from "../sharedComponents/NavigationBar/NavigationBar";

const MainLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <FooterBottom />
    </>
  );
};

export default MainLayout;
