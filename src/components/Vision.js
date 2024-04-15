import React, { useEffect } from "react";
import barriles from "../images/barriles.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const gothamBlack = {
  fontFamily: "Gotham Black",
};

function Vision() {
  useEffect(() => {
    AOS.init({
      // Configura las opciones de AOS aquí, si es necesario
    });
  }, []);
  return (
    <div className="bg-[#252323] py-20 lg:py-28 ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-32">
        <div
          className="text-center relative z-10 w-full lg:w-2/5 flex flex-col justify-between gap-y-5 lg:gap-y-0"
          id="izquierdo"
        >
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-white text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase text-start"
            style={gothamBlack}
          >
            Visión de la empresa
          </h1>
          <p
            className="text-left text-lg leading-[28px] font-gotham text-white"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            Nuestra bodega en Mendoza se ubica en Vista Flores, a los pies del
            volcán Tupungato, una de las montañas más importantes de la
            cordillera de los Andes.
          </p>
          <div
            className="hidden lg:inline-block mr-auto z-10"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <div className="border border-white text-white h-8 w-48 flex justify-center items-center hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center">
              <Link to="/nosotros">CONOCER MÁS</Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <div className="inline-block mr-auto z-10">
              <Link
                to="/nosotros"
                href=""
                className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
              >
                CONOCER MÁS
              </Link>
            </div>
          </div>
        </div>
        <div
          id="derecho"
          className="w-full lg:w-2/5  ml-auto  "
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <img className="shadow-2xl" src={barriles} alt="Barriles" />
        </div>
      </div>
    </div>
  );
}

export default Vision;
