import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full  z-50">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <p>
        <Link to="#" className="text-blue-400 hover:underline mx-2">
          Privacy Policy
        </Link>
        |
        <Link to="#" className="text-blue-400 hover:underline mx-2">
          Terms of Service
        </Link>
        |
        <NavLink to="/signUp" className="text-blue-400 hover:underline mx-2">
          Register for Free
        </NavLink>
      </p>
    </footer>
  );
};

export default Footer;
