import React from "react";
import fondoVinos from "../images/fondoPampa.png";
import fondoLinea from "../images/fondoNuevaLinea.png";

import vino1 from "../images/vino1.png";
import vino2 from "../images/vino2.png";
import vino3 from "../images/vino3.png";
import flechaIzquierda from "../images/flechaIzquierda.png";
import flechaDerecha from "../images/flechaDerecha.png";

function Linea() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.38)",
  };

  return (
    <div className="bg-[#252323] py-8">
      <div
        className="w-full bg-cover bg-center lg:bg-bottom relative"
        style={{ backgroundImage: `url(${fondoLinea})` }}
      >
        !
        <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-28 space-y-5">
          <div className="text-center relative z-10  flex justify-center">
            <h1 className="texto-nueva-linea text-black font-black  ">
              NUEVA LÍNEA RASPÓN
            </h1>
          </div>
        </div>
        <div className="z-0" style={overlayStyle}></div>
      </div>
    </div>
  );
}

export default Linea;
