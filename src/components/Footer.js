import React from "react";
import logogue from "../assets/img/profilegue.png"

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap bg-white text-gray-600 body-font border-t border-[#84B2D1]">
        <div className="container py-4 px-4 flex items-center justify-center sm:flex-row flex-col mx-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <p className="text-logo text-s text-[#84b2d1]">DAP</p>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Made with love 💖
          </p>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;