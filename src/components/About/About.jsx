// src/components/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our website! We are committed to providing the best
          services for our customers.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to deliver high-quality products and exceptional
          customer service. We value your feedback and strive to continuously
          improve our offerings.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing us. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
