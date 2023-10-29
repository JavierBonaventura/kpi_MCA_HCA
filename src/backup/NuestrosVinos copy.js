import React from "react";
import fondoVinos from "../images/fondoVinos.png";
import vino1 from "../images/vino1.png";
import vino2 from "../images/vino2.png";
import vino3 from "../images/vino3.png";
import flechaIzquierda from "../images/flechaIzquierda.png";
import flechaDerecha from "../images/flechaDerecha.png";

function NuestrosVinos() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.63)",
  };

  return (
    <div
      className="w-full h-[979px]  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondoVinos})` }}
    >
      <div className="text-center relative z-10 top-[78px] mx-32">
        <div className="w-[682px] h-[50px]">
          <h1 className="mb-4 texto-vinos text-black font-black absolute ">
            VINOS
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="relative left-[100px]">
          <div className="z-10 h-14 w-14 bg-[#460377] rounded-full flex items-center justify-center absolute top-1/3  ">
            <img
              src={flechaIzquierda}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>
        <div className="z-10 flex justify-center items-center"></div>
        <div className="z-10 flex flex-col items-center mt-48">
          <img className="h-1/3" src={vino1} alt="Vino 1" />
          <p className=" mt-16 texto-vinos-botellas">malbec</p>
        </div>

        <div className="z-10 flex flex-col items-center mt-32">
          <img className="h-1/2" src={vino2} alt="Vino 2" />
          <div className="flex flex-col items-center flex-shrink-0 w-1/2 justify-center">
            <p className=" mt-16 texto-vinos-botellas">cabernet sauvignon</p>
          </div>
        </div>
        <div className="z-10 flex flex-col items-center mt-48">
          <img className="h-1/3" src={vino3} alt="Vino 3" />
          <p className=" mt-16 texto-vinos-botellas">malbec</p>
        </div>
        <div className="z-10 flex justify-center items-center"></div>
        <div className="relative right-[165px]">
          <div className="z-10 h-14 w-14 bg-[#460377] rounded-full flex items-center justify-center absolute top-1/3  ">
            <img
              src={flechaDerecha}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="ml-8 flex justify-center items-center z-10 w-[220px] h-[40px] flex-shrink-0 border border-white relative top-[-390px] flex flex-col items-center">
          <p className="text-ver-mas">ver mas</p>
        </div>
      </div>

      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NuestrosVinos;
