import React from "react";
import valleUco from "../images/valleUco.png";

function ValleDeUco() {
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
      className="w-full h-[841px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${valleUco})` }}
    >
      <div className="text-center relative  z-10">
        <div className="w-[584px] mx-auto">
          <h1 className="mb-4 texto-valle-uco-1" style={gothamBlack}>
            VALLE DE UCO
          </h1>
        </div>
        <div className="w-[534px] mx-auto ">
          <p className="text-center texto-valle-uco-2" style={firaSans}>
          La expresión de Vista Flores, la frescura de Pampa el Cepillo, la fineza de Gualtallary y la textura de Paraje Altamira
          </p>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default ValleDeUco;
