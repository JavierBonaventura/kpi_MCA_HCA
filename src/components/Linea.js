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
    <div
      className="w-full h-[718px]  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondoLinea})` }}
    >
      <div className="text-center relative z-10 top-[240px] flex justify-center">
        <div className="w-[705px] h-[50px]">
          <h1 className="mb-4 texto-nueva-linea text-black font-black  ">
            NUEVA LÍNEA RASPÓN{" "}
          </h1>
        </div>
      </div>
      <div className="text-center relative z-10 top-[280px] flex justify-center">
        <div className="w-[713px] h-[84px]">
          <h1 className="mb-4 texto-nueva-linea-secundario font-black  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
            turpis elementum, accumsan ante ut, finibus nulla. Morbi feugiat
            aliquam molestie. Pellentesque at nisl vitae tellus porta laoreet at
            vel risus.{" "}
          </h1>
        </div>
      </div>


      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default Linea;
