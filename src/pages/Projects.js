import React from "react";
import nicejob from "../assets/img/nicejob.jpg";
import restapi from "../assets/img/nestjsapi.jpg";
import mobileapps from "../assets/img/mobileapps.jpg"
import jobsku from "../assets/img/jobsku.jpg"
import crudnilai from "../assets/img/crudnilai.jpg"
import agnisshop from "../assets/img/agnisshop.jpg"
import dapgames from "../assets/img/dapgames.jpg"
import dapgames1 from "../assets/img/dapgames.png"

const Projects = () => {
  const portfolio = [
    {
      title: "DAP Games",
      desc: "Saya menggunakan React JS sebagai framework frontend dan Nest JS sebagai backend untuk mengembangkan aplikasi daftar games android. Aplikasi ini menawarkan fitur login, register, dan dashboard yang memungkinkan pengguna untuk mengelola data games. Dengan menambah, mengedit, atau menghapus list data game yang tersedia.",
      img: dapgames,
      tech: ["React JS", "Nest JS", "Tailwind"],
      github: true,
      link: "https://github.com/dwiagungapp/dapgames",
      deploy: "https://dapgames.vercel.app/",
    },
    {
      title: "Latihan Rest API",
      desc: "Membuat Rest API dengan menggunakan framework Nest JS membuat API Login, Register, School, Game, dan juga Profile dengan upload image Avatar. Deploy ke VPS menggunakan Docker.",
      img: restapi,
      tech: ["Nest JS", "Typescript", "OpenAPI", "Prisma", "Docker"],
      github: true,
      link: "https://github.com/dwiagungapp/latihan-nestjs",
      deploy: "http://dwiagung.me/openapi",
    },
    {
      title: "NiceJob",
      desc: "Website ini dibuat untuk final project dari PKS Digital School. Terdapat login dan register dan juga halaman dashboard untuk menambahkan data pekerjaan baru.",
      img: nicejob,
      tech: ["React JS", "Tailwind CSS"],
      github: true,
      link: "https://github.com/dwiagungapp/nicejob",
      deploy: "https://portal-nicejob.netlify.app/",
    },
    {
      title: "Mobile Apps",
      desc: "Website ini dibuat hanya untuk tugas Quiz. Website ini berisi data game, filter by category, dan tabel CRUD untuk menambahkan data game.",
      img: mobileapps,
      tech: ["React JS", "Tailwind CSS"],
      github: true,
      link: "https://github.com/dwiagungapp/quiz6-mobileapps",
      deploy: "https://quiz6-mobileapps.vercel.app/",
    },
    {
      title: "CRUD Nilai Mahasiswa",
      desc: "Membuat Tabel CRUD nilai mahasiswa, terdapat create data, edit data, dan juga delete data",
      img: crudnilai,
      tech: ["React JS", "Tailwind CSS"],
      github: false,
      link: "",
      deploy: "https://crud-sederhana.netlify.app/",
    },
    {
      title: "Jobsku",
      desc: "Jobsku Job Portal dibuat dengan ReactJS dan Tailwind, menggunakan api dari Sanbercode untuk get data pekerjaan dan juga api reqres.in untuk user login",
      img: jobsku,
      tech: ["React JS", "Tailwind CSS"],
      github: true,
      link: "https://github.com/dwiagungapp/jobsku-portal",
      deploy: "https://jobsku-portal.vercel.app/",
    },
    {
        title: "Agnis Shop",
        desc: "Sebuah toko online produk kecantikan wanita, saya buat menggunakan Wordpress, Woocommerce, dan template SaudagarWP.",
        img: agnisshop,
        tech: ["Wordpress", "Woocommerce", "Template SaudagarWP"],
        github: false,
        link: "",
        deploy: "https://agnis.shop/",
      },
  ];

  return (
    <>
      <div id="projects" className="max-w-4xl mx-auto border-t-4 shadow-xl border-[#84b2d1] p-10 m-4 flex flex-col justify-between items-center mt-16">
        <div className="mb-4">
          <p className="text-2xl font-bold flex flex-col">
            <span className="text-gray-600">Projects</span>
            <span className="w-12 h-1 rounded-full bg-[#84b2d1] bg-opacity-75"></span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {portfolio.map((port, i) => {
            return (
              <div
                key={i}
                className="shadow-lg bg-slate-100 rounded p-4 flex flex-col justify-between transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl"
              >
                <div>
                  <img
                    src={port.img}
                    className="object-contain object-fill object-cover w-full h-64"
                    alt={port.title}
                  />
                </div>
                <div className="my-3">
                  <p className="text-lg font-bold ">{port.title}</p>
                  <p className="text-gray-600 mt-3">{port.desc}</p>
                </div>
                <div>
                  <div className="flex gap-3">
                    {port.github ? (
                      <a
                        href={port.link}
                        className="bg-black text-sm py-2 px-4 text-white rounded flex gap-2 items-center"
                      >
                        <i className="fa-brands fa-github"></i>
                        <span>Github</span>
                      </a>
                    ) : null}
                    {port.deploy !== "" ? (
                      <a
                        href={port.deploy}
                        className="bg-[#84b2d1] text-sm py-2 px-4 text-white rounded flex gap-2 items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-link"></i>
                        <span>Lihat</span>
                      </a>
                    ) : null}
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {port.tech.map((tech, j) => {
                      return (
                        <span
                          key={j}
                          className="bg-[#84b2d1] text-sm py-1 px-3 text-white rounded flex gap-2 items-center"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;