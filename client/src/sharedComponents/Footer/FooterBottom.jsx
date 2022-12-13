import { Footer } from "flowbite-react";
import React from "react";
import Container from "../basicComponents/Container";

const FooterBottom = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto">
        <Footer container={true} className="">
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="https://flowbite.com"
                src="https://xyz.xyz/assets/images/xyzxyz-logo.svg"
                alt="Flowbite Logo"
                name=""
              />
              <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright href="#" by="XYZ Company" year={2022} />
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default FooterBottom;
