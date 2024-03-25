import React from "react";
import barriles from "../images/barriles.png";

function Vision() {
  return (
    <div className="bg-[#252323] py-20 lg:py-28 ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-32">
        <div
          className="text-center relative z-10 w-full lg:w-2/5 flex flex-col justify-between gap-y-5 lg:gap-y-0"
          id="izquierdo"
        >
          <h1 className="texto-vision text-black font-black text-left">
            Visión de la empresa
          </h1>
          <p className="texto-vision-segundo-texto text-left ">
            Nuestra bodega en Mendoza se ubica en Vista Flores, a los pies del
            volcán Tupungato, una de las montañas más importantes de la
            cordillera de los Andes.
          </p>
          <a
            href=""
            className="boton-ver-mas-vision !rounded-none border-white relative  flex flex-col items-center hover:bg-[#460377] transition-all ease-in-out duration-300"
          >
            <p className="boton-ver-mas-texto-vision">CONOCER MÁS</p>
          </a>
        </div>
        <div id="derecho" className="w-full lg:w-2/5  ml-auto  ">
          <img className="" src={barriles} alt="Barriles" />
        </div>
      </div>
    </div>
  );
}

export default Vision;
