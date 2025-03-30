
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
   const isregiserpage = location.pathname === "/regiser"
    const isLoginpage = location.pathname === "/Login"
  return (
    <>
    {!( isLoginpage || isregiserpage) &&(
    <footer className=" bg-gray-800 mt-3 text-white py-8">
      <div className=" container mx-auto px-6 sm:px-12">
        <div className=" grid grid-cols-2 ml-20 md:ml-40 left-20 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <h2 className="hover:text-2xl text-xl text-white cursor-pointer font-bold">
                About Us
              </h2>
            </Link>
          </div>

          <div className="space-y-4">
            <Link to={"/content "} style={{ textDecoration: "none" }}>
              <h2 className="hover:text-2xl text-xl text-white cursor-pointer font-bold">
              Contact 
              </h2>
            </Link>
          </div>

          <div className="space-y-4">
            <Link to={"/ricy"} style={{ textDecoration: "none" }}>
              <h2 className="hover:text-2xl text-xl text-white cursor-pointer font-bold">
                Privacy
              </h2>
            </Link>
          </div>
          <div className="space-y-4">
            <Link to={"/Follow"} style={{ textDecoration: "none" }}>
              <h2 className="hover:text-2xl text-xl text-white cursor-pointer font-bold">
                Follow Us
              </h2>
            </Link>
          </div>
        </div>
        <div className=" -mb-6 mt-2 text-center text-gray-400">
          <p>&copy; Ai-Shopping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  ) }
  </>
  );
};

export default Footer;
