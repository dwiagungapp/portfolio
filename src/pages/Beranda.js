import React from "react";
import profilimage from "../assets/img/fotogue.jpg";
import Typewriter from "typewriter-effect";

const Beranda = () => {
  return (
    <>
      <div
        id="home"
        className="border-[#84b2d1] max-w-4xl mx-auto border-t-4 shadow-xl m-4 flex md:flex-row flex-col justify-between items-center"
      >
        <div className="md:w-1/2 w-10/12 md:mt-10 mt-10 mb-10">
          <div className="w-2/3 mx-auto profil relative">
            <img src={profilimage} className="transition duration-300 transform hover:scale-105 group animate-in zoom-in-95 duration-300 w-full relative rounded-full border-2 border-[#84b2d1]" alt="" />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:text-left text-center mb-10">
          <p className="md:text-4xl text-3xl font-extrabold flex flex-col gap-3">
            <span className="font-medium text-base text-gray-600">
              Hi everyone <span className="animate-waving-hand">👋</span>, My name is
            </span>
            <span className="md:text-4xl text-3xl text-logo">
            <span className="text-[#84b2d1] text-logo">D</span><span className="text-gray-600 text-logo">wi </span>
            <span className="text-[#84b2d1] text-logo"> A</span><span className="text-gray-600 text-logo">gung </span>
            <span className="text-[#84b2d1] text-logo"> P</span><span className="text-gray-600 text-logo">rayogi</span>
            <span className="font-medium text-lg text-gray-600 mt-4">
            </span></span> 
            
          </p>
          <p className="mt-8">
            <a
              href="/CV - Dwi Agung Prayogi.pdf"
              target={"_blank"}
              rel="noopener noreferrer"
              className="transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl py-3 px-6 bg-[#84B2D1] text-white text-lg inline-block cv-download"
            >
              <i class="fa-sharp fa-solid fa-file-pdf mr-2"></i>
                Download CV
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Beranda;