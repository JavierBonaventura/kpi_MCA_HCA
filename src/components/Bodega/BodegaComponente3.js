import React from "react";
import bodegaFoto2 from "../../images/bodegaFoto2.png";
import flechaIzquierda from "../../images/flechaIzquierda.png";
import flechaDerecha from "../../images/flechaDerecha.png";

function BodegaComponente3() {


  return (
    <div
      className="w-full h-[625px]  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bodegaFoto2})` }}
    >


      <div className="flex justify-between relative top-1/2 ">
        <div className="relative left-[100px] ">
          <div className="z-10 h-14 w-14 bg-[#460377] rounded-full flex items-center justify-center absolute  ">
            <img
              src={flechaIzquierda}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>

        <div className="z-10 flex justify-center items-center"></div>
        <div className="relative right-[165px]">
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
