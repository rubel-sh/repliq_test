import React from "react";
import { Button, Navbar } from "flowbite-react";
import Container from "../basicComponents/Container";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto p-4 lg:p-0 ">
        <Navbar fluid={true} rounded={true} className=" ">
          <Navbar.Brand href="/">
            <img
              src="https://xyz.xyz/assets/images/xyzxyz-logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <NavLink to="/" active={true}>
              Home
            </NavLink>
            <NavLink to="/manageorders">Manage Orders</NavLink>
            <NavLink to="/customerlists">Customer Lists</NavLink>
            <NavLink to="/onlinepayments">Online Payments</NavLink>
            <NavLink to="/unlimitedproducts">Unlimited Products</NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;
