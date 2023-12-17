import React from "react";
import gualtallary from "../images/Gualtallary.png";
import iconoMap from "../images/iconoMap.png";
import iconoSuelo from "../images/iconoSuelo.png"
import iconoUvas from "../images/iconoUvas.png"

function Gualtallary() {
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
    <div className="w-full h-[680px] flex items-center justify-center bg-cover bg-center relative">
      <div className="w-1/2 bg-gray-300">
        <img src={gualtallary} alt="Gualtallary" className="w-full h-[680px]" />
      </div>

      <div className="w-1/2 bg-[#252323] h-full">
        <div className="w-[470px]">
          <h1 className="mt-28 ml-24 texto-guantallary" style={gothamBlack}>
            GUALTALLARY
          </h1>
        </div>

        <div className="w-[470px] h-[280px] flex items-center ml-24">
          <div className="mt-11">
            <p className="texto-guantallary-sub">
              <img src={iconoMap} alt="Icono Map" className="inline-block mr-2" />
              Tupungato, 1.280 msnm
            </p>
            <p className="texto-guantallary-sub mt-6">
              Ubicada en uno de los lugares más extremos y apasionantes para el vino argentino.
            </p>
            <p className="texto-guantallary-sub mt-6">
            <img src={iconoSuelo} alt="Icono Map" className="inline-block mr-2" />
              SUELO: Formado de manera biológica, interviniendo bacterias, plantas y rocas en su composición.
            </p>
            <p className="texto-guantallary-sub mt-6 ">
            <img src={iconoUvas} alt="Icono Map" className="inline-block mr-2" />

              VARIEDADES: Malbec y Chardonnay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gualtallary;
