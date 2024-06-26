import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <NavLink to="/" className="text-white hover:text-blue-400">
          Logo
        </NavLink>
      </div>
      <div className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          SignIn
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          SignUp
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
