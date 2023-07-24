import React, { useEffect } from "react";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Beranda from "../pages/Beranda";

const Layout = () => {

  useEffect(() => {
    document.title = "Dwi Agung Prayogi";
  }, []);

  return (
    <>
    
    <Navbar/>
    <div className="items-center justify-center px-4 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
    
    {/* Main Content */}
    <div className="md:col-span-3">

    <Beranda/>

        <About/>
        <Projects/>
        <Skills/>
        <Contact/>

        

    </div>
  </div>
  
  <Footer/>

  </> 
  );
};

export default Layout;