import React from "react";
import barriles from "../images/barriles.png";

function Vision() {
  return (
<div className="w-full h-[624px] bg-cover bg-[#252323] flex justify-center">
  <div className="text-center relative z-10 top-[120px]  ml-32" id="izquierdo">
    <div className="w-[615px] h-[50px]">
      <h1 className="mb-4 texto-vision text-black font-black absolute ">
        Visión de la empresa
      </h1>
    </div>
    <div className="w-[450px] pt-12">
      <p className="texto-vision-segundo-texto text-left">
        Nuestra bodega en Mendoza se ubica en Vista Flores, a los pies del volcán Tupungato, una de las montañas más importantes de la cordillera de los Andes.
      </p>
    </div>
    <div className="boton-ver-mas-vision mt-16">
      <p className="boton-ver-mas-texto-vision">CONOCER MÁS</p>
    </div>
  </div>
  <div id="derecho" className="mt-[120px] mr-[88px]">
    <img className="w-[507px]" src={barriles} alt="Barriles" />
  </div>
</div>

  );
}

export default Vision;
