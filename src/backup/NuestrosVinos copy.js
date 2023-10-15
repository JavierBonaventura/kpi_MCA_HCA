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
        <div className="relative">
          <div className="z-10 h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center absolute top-1/3  ">
            <img
              src={flechaIzquierda}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>
        <div className="mx-2 z-10 mt-64">
          <img className="h-1/2 " src={vino1} alt="Vino 1" />
          <p>vino1</p>
        </div>
        <div className="mx-2 z-10 mt-64">
          <img className="h-1/2" src={vino2} alt="Vino 2" />
          <p>vino2</p>
        </div>
        <div className="mx-2 z-10 mt-64">
          <img className="h-1/2" src={vino3} alt="Vino 3" />
          <p>vino3</p>
        </div>
        <div className="mr-16">
          <div className="z-10 h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center absolute top-1/2  ">
            <img
              src={flechaDerecha}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NuestrosVinos;
