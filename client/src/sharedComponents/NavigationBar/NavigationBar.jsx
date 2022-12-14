import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { TokenContext } from "../../context/TokenProvider";

const NavigationBar = () => {
  // const [token, setToken] = useState("");
  // const token = localStorage.getItem("repliqToken");
  const { token } = useContext(TokenContext);
  console.log(token);
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
            <NavLink to="/">Home</NavLink>
            {token ? (
              <>
                <NavLink to="/manageorders">Manage Orders</NavLink>
                <NavLink to="/customerlists">Customer Lists</NavLink>
                <NavLink to="/onlinepayments">Online Payments</NavLink>
                <NavLink to="/unlimitedproducts">Unlimited Productss</NavLink>
              </>
            ) : (
              <NavLink to="/register">Join Now</NavLink>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;
