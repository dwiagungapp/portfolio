import React, { useState, useRef } from 'react';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");

    if (targetId === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - menuRef.current.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }

    setOpen(false);
  };

  return (
    <>
      <header className="border-b border-[#84b2d1] bg-white py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between md:px-44 lg:max-w-7xl mx-auto max-w-full px-[10%] flex-wrap w-full">
          <a href="/">
            <span className="text-[#84B2D1] text-4xl font-bold text-logo ">DAP</span>
          </a>

          <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={handleMenuClick} />

          <nav ref={menuRef} className={`${open ? "block mt-2" : "hidden"} w-full lg:flex items-center lg:w-auto`}>
            <ul className="text-base font-sans text-gray-600 lg:flex lg:justify-between">
              <li>
                <a href="/" onClick={handleNavLinkClick} className="lg:px-5 py-2 block hover:text-[#84B2D1] font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleNavLinkClick} className="lg:px-5 py-2 block hover:text-[#84B2D1] font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleNavLinkClick} className="lg:px-5 py-2 block hover:text-[#84B2D1] font-semibold">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleNavLinkClick} className="lg:px-5 py-2 block hover:text-[#84B2D1] font-semibold">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleNavLinkClick} className="lg:px-5 py-2 block hover:text-[#84B2D1] font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;