import React from "react";
import mapaVinedos from "../images/MapaVinedos.png";

function NuestrosVinedos() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div
      className="w-full py-32 lg:py-56 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${mapaVinedos})` }}
    >
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NuestrosVinedos;
