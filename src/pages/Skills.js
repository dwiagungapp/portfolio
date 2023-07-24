import React from "react";
import html from "../assets/img/html5.png";
import css from "../assets/img/css3.png";
import js from "../assets/img/js.png";
import tailwindcss from "../assets/img/tailwind.png";
import react from "../assets/img/react.png";
import nest from "../assets/img/logonest.svg";
import wordpress from "../assets/img/wordpress.png";

const Skills = () => {
    const logo = [
        {
          title: "HTML",
          img: html,
        },
        {
          title: "CSS",
          img: css,
        },
        {
          title: "Javascript",
          img: js,
        },
        {
          title: "Tailwind CSS",
          img: tailwindcss,
        },
        {
          title: "React JS",
          img: react,
        },
        {
          title: "Nest JS",
          img: nest,
        },
        {
          title: "Wordpress",
          img: wordpress,
        },
      ];
    

    return (
        <>
          <div id="skills" className="max-w-4xl mx-auto border-t-4 shadow-xl border-[#84b2d1] p-10 m-4 flex flex-col justify-between items-center mt-16">
          <div className='mb-4'>
                        <p className="text-2xl font-bold flex flex-col">
                            <span className="text-gray-600">Skills</span>
                            <span className='w-12 h-1 rounded-full bg-[#84b2d1] bg-opacity-75'></span>
                        </p>
                    </div>
        
          <div className="flex flex-wrap gap-3 ">
            {logo.map((logo, i) => {
              return (
                <div
                  className=" flex group"
                  title={logo.title}
                  key={i}
                >
                  <div className="h-24 w-24 p-4 rounded-lg group-hover:border flex group-hover:border-black group-hover:shadow-lg transition duration-300 transform hover:scale-105 group hover:shadow-xl">
                    <img src={logo.img} className="w-full object-contain" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </>
    )
}

export default Skills;