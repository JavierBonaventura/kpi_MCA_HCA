import React from "react";
import fondoVinos from "../images/fondoPampa.png";
import vino1 from "../images/vino1.png";
import vino2 from "../images/vino2.png";
import vino3 from "../images/vino3.png";
import flechaIzquierda from "../images/flechaIzquierda.png";
import flechaDerecha from "../images/flechaDerecha.png";

function Pampa() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.40)",
  };

  return (
    <div
      className="w-full h-[624px]  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondoVinos})` }}
    >
            <div className="text-center relative z-10 top-[78px] flex justify-center">
        <div className="w-[278px] h-[14px]">
          <h1 className="mb-4 texto-vinedos text-black font-black absolute ">
          VIÑEDOS - VALLE DE UCO
          </h1>
        </div>
      </div>
      <div className="text-center relative z-10 top-[85px] flex justify-center">
        <div className="w-[397px] h-[50px]">
          <h1 className="mb-4 texto-pampa text-black font-black absolute ">
          PAMPA ÉL CEPILLO.
          </h1>
        </div>
      </div>
      <div className="flex justify-between relative top-1/3 ">
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
      <div className="flex justify-center">
        <div className=" flex justify-center items-center z-10 w-[124px] h-[33px] flex-shrink-0 border border-white relative flex flex-col items-center  top-[100px] ">
          <p className="texto-ver-mas-pampa">ver más</p>
        </div>
      </div>

      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default Pampa;
