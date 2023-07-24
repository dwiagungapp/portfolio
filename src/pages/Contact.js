import React from 'react';

const Contact = () => {

    function copy() {
    navigator.clipboard.writeText("dwiagungapp@gmail.com");
    document.getElementById("btnCopy").setAttribute("title", "Copied");
  }

  return (
    <div id="contact" className="max-w-4xl mx-auto border-t-4 shadow-xl border-[#84b2d1] p-10 m-4 flex flex-col justify-between items-center mt-16">
    <div className='mb-4'>
                        <p className="text-2xl font-bold flex flex-col">
                            <span className="text-gray-600">Contact</span>
                            <span className='w-12 h-1 rounded-full bg-[#84b2d1] bg-opacity-75'></span>
                        </p>
                    </div>
      <div className="flex flex-wrap mt-8 ">
        <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-gray-100 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl">
          <p className="text-2xl font-semibold flex gap-3 items-center">
            <i className="fa-regular fa-envelope"></i>
            <span className='text-gray-900'>Email</span>
          </p>
          <p className="italic mt-2 my-email">dwiagungapp@gmail.com</p>
          <button
            type="button"
            className="flex gap-2 py-1 px-2 rounded border border-[#84b2d1] mt-3 items-center hover:text-white hover:bg-[#84b2d1] transition duration-500 ease"
            onClick={() => copy()}
            id="btnCopy"
          >
            <i className="fa-solid fa-copy"></i>
            <span>Copy</span>
          </button>
        </div>
        <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-gray-100 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl">
          <p className="text-2xl font-semibold flex gap-3 items-center">
            <i className="fa-brands fa-linkedin"></i>
            <span className='text-gray-900'>LinkedIn</span>
          </p>
          <p className="italic mt-2">Dwi Agung Prayogi</p>
          <a
            href="https://www.linkedin.com/in/dwiagungpray/"
            className="flex gap-2 transition-all duration-500 ease py-1 px-2 w-20 hover:w-24 hover:gap-6 rounded mt-3 items-center text-white hover:opacity-75 bg-[#84b2d1]"
          >
            <span>Visit</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-gray-100 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl">
          <p className="text-2xl font-semibold flex gap-3 items-center">
            <i className="fa-brands fa-github"></i>
            <span className='text-gray-900'>Github</span>
          </p>
          <p className="italic mt-2">dwiagungapp</p>
          <a
            href="https://github.com/dwiagungapp"
            className="flex gap-2 transition-all duration-500 ease py-1 px-2 w-20 hover:w-24 hover:gap-6 rounded mt-3 items-center text-white hover:opacity-75 bg-[#84b2d1]"
          >
            <span>Visit</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-gray-100 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl">
          <p className="text-2xl font-semibold flex gap-3 items-center">
            <i className="fa-brands fa-instagram"></i>
            <span className='text-gray-900'>Instagram</span>
          </p>
          <p className="italic mt-2">@dwiagungapp</p>
          <a
            href="https://www.instagram.com/dwiagungapp"
            className="flex gap-2 transition-all duration-500 ease py-1 px-2 w-20 hover:w-24 hover:gap-6 rounded mt-3 items-center text-white hover:opacity-75 bg-[#84b2d1]"
          >
            <span>Visit</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;