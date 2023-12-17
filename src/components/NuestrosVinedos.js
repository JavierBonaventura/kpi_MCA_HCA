import React from "react";
import fondoBodega from "../images/fondoBodega.png";

function NuestrosVinedos() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  }


  
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.46)",
   
  };

  return (
    <div
      className="w-full h-[506px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondoBodega})` }}
    >
      <div className="text-center relative  z-10">
        <div className="w-[719px] mx-auto">
          <h1 className="mb-4 texto-valle-uco-1" style={gothamBlack}>
          NUESTROS VIÑEDOS
          </h1>
        </div>

      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NuestrosVinedos;
