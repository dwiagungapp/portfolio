import React, {useState} from "react";
import Certificate1 from "../assets/img/sertifikat1.jpg"
import Certificate4 from "../assets/img/sertifikat-nestjs.png"
import Certificate3 from "../assets/img/sertifikat3.png"
import Certificate5 from "../assets/img/Sertifikat5.png"
import FsLightbox from 'fslightbox-react';
import ExperienceList from "../components/ExperienceList";

const About = () => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <>
         <div id="about" className="max-w-4xl mx-auto border-t-4 shadow-xl border-[#84b2d1] p-10 m-4 flex flex-col justify-between items-center mt-16">
         
         <div className="mb-4">
          <p className="text-2xl font-bold flex flex-col">
            <span className="text-gray-600">About Me</span>
            <span className="w-12 h-1 rounded-full bg-[#84b2d1] bg-opacity-75"></span>
          </p>
        </div>
                <div className="flex flex-col">
                    <div>
                        <p className='text-lg'>
                        <span className="text-[#84B2D1] font-bold text-4xl">H</span> 
                        <span className="text-gray-600 text-base">alo nama saya Dwi Agung Prayogi.

                        Saya selalu mencari solusi kreatif, dan saya tidak takut untuk belajar teknologi baru untuk mencapai tujuan saya. Baik itu membuat sesuatu yang baru atau mengoptimalkan solusi yang sudah ada untuk kinerja yang lebih baik, saya merasa paling senang ketika saya bekerja keras untuk membuat sesuatu yang luar biasa!
                        <p><br/></p>
                        <p>Saya menggunakan ReactJS, Javascript, HTML, CSS, Nest JS, dan CMS Wordpress dalam pembuatan website tetapi saya tidak pernah membatasi diri dan senang mengambil tantangan baru di bidang yang belum saya pelajari sebelumnya.</p>
                        </span></p>
                    </div>
                    <div className='mt-4'>
                        <p className="text-2xl font-bold flex flex-col justify-center items-center">
                            <span className="text-gray-600 mt-4">Work Experience</span>
                            <span className='w-12 h-1 rounded-full bg-[#84b2d1] bg-opacity-75'></span>
                        </p>
                    </div>
                    <ExperienceList/>
                    <div className='mt-4'>
                        <p className="text-2xl font-bold flex flex-col justify-center items-center">
                            <span className="text-gray-600">Certificates</span>
                            <span className='w-12 h-1 rounded-full bg-[#84b2d1] bg-opacity-75'></span>
                        </p>
                    </div>
                    <div className="w-full flex flex-row mt-6 justify-center gap-8 flex-wrap">
                        <div className="cursor-pointer">
                            <img src={Certificate1} className='w-fill h-48 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl' alt="" onClick={() => openLightboxOnSlide(1)} />
                        </div>
                        <div className="cursor-pointer">
                            <img src={Certificate5} className='w-fill h-48 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl' alt="" onClick={() => openLightboxOnSlide(2)} />
                        </div>
                        <div className="cursor-pointer">
                            <img src={Certificate4} className='w-fill h-48 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl' alt="" onClick={() => openLightboxOnSlide(3)} />
                        </div>
                        <div className="cursor-pointer">
                            <img src={Certificate3} className='w-fill h-48 transition duration-300 transform shadow-sm hover:scale-105 group hover:shadow-xl' alt="" onClick={() => openLightboxOnSlide(4)} />
                        </div>
                    </div>
                </div>
            </div>


        <FsLightbox
            toggler={lightboxController.toggler}
            sources={[
                Certificate1,
                Certificate5,
                Certificate4,
                Certificate3
            ]}
            slide={lightboxController.slide}
            
        />
        </>
    )
}

export default About;