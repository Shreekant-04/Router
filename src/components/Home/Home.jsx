import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen bg-[url('url(https://unsplash.com/photos/green-trees-near-body-of-water-during-daytime-aCnkRlBD0i4)')] h-64 w-full bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Vite + React App
        </h1>
        <p className="text-2xl mb-8">
          Your one-stop solution for all your needs
        </p>
        <NavLink
          to="/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
