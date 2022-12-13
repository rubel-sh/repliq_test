import React from "react";
import { Button, Navbar } from "flowbite-react";
import Container from "../basicComponents/Container";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
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
    </Container>
  );
};

export default NavigationBar;
