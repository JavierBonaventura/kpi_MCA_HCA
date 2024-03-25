import React from "react";
import bodegaFoto2 from "../../images/bodegaFoto2.png";
import flechaIzquierda from "../../images/flechaIzquierda.png";
import flechaDerecha from "../../images/flechaDerecha.png";

function BodegaComponente3() {
  return (
    <div
      className="w-full py-40 lg:py-80  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bodegaFoto2})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex justify-between  relative  ">
        <div className="relative  ">
          <div className="z-10 h-14 w-14 bg-[#460377] rounded-full flex items-center justify-center absolute">
            <img
              src={flechaIzquierda}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>

        <div className="relative right-14 top-0">
          <div className="z-10 h-14 w-14 bg-[#460377] rounded-full flex items-center justify-center absolute   ">
            <img
              src={flechaDerecha}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodegaComponente3;
